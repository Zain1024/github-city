export default {
    name: "monochrome",
    
    defs: `
        <linearGradient id="monoLightSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="100%" stop-color="#f5f7fa" />
        </linearGradient>
        
        <radialGradient id="lightMist" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
            <stop offset="60%" stop-color="#ffffff" stop-opacity="0.1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
    `,
    backgroundFill: "url(#monoLightSky)",

    top: contribution => {
        if (contribution === 0) return "#f8f9fa";
        if (contribution <= 3) return "#b8b8b8";
        if (contribution <= 6) return "#787878";
        if (contribution <= 9) return "#404040";
        return "#121212"; // 最高贡献：极深黑
    },
    left: contribution => {
        if (contribution === 0) return "#f1f3f5";
        if (contribution <= 3) return "#a3a3a3";
        if (contribution <= 6) return "#666666";
        if (contribution <= 9) return "#303030";
        return "#0a0a0a";
    },
    right: contribution => {
        if (contribution === 0) return "#e9ecef";
        if (contribution <= 3) return "#8e8e8e";
        if (contribution <= 6) return "#555555";
        if (contribution <= 9) return "#222222";
        return "#000000";
    },

    extraForeground: (buildings) => {
        return `
            <ellipse cx="200" cy="450" rx="400" ry="120" fill="url(#lightMist)">
                <animateTransform 
                    attributeName="transform" 
                    type="translate" 
                    values="0,0; 60,-10; 0,0" 
                    dur="22s" 
                    repeatCount="indefinite" 
                />
            </ellipse>
            
            <ellipse cx="800" cy="300" rx="450" ry="160" fill="url(#lightMist)">
                <animateTransform 
                    attributeName="transform" 
                    type="translate" 
                    values="0,0; -80,15; 0,0" 
                    dur="30s" 
                    repeatCount="indefinite" 
                />
            </ellipse>
            
            <ellipse cx="450" cy="550" rx="350" ry="90" fill="url(#lightMist)">
                <animateTransform 
                    attributeName="transform" 
                    type="translate" 
                    values="0,0; 40,5; 0,0" 
                    dur="16s" 
                    repeatCount="indefinite" 
                />
            </ellipse>
        `;
    }
};