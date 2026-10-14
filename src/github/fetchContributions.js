
const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

const query = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
      }
    }
  }
}
`;

async function fetchContributions() {
  if (!username || !token) {
    throw new Error("GitHub username or token is missing.");
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json"
    },
    body: JSON.stringify({
      query,
      variables: { login: username }
    })
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed: HTTP ${response.status}`
    );
  }

  if (result.errors?.length) {
    throw new Error(
      "GitHub GraphQL request failed: " +
      result.errors.map(error => error.message).join("; ")
    );
  }

  const userData = result.data?.user;

  if (!userData) {
    throw new Error(
      `GitHub user "${username}" was not found.`
    );
  }

  return userData.contributionsCollection.contributionCalendar.weeks;
}

export default fetchContributions;
