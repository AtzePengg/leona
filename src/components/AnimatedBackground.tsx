
import React, { useEffect, useRef } from 'react';
import { PartyPopper, Gift, Cake, Star, Heart, Sparkles, Music } from 'lucide-react';

const ITEMS = [
  { Component: PartyPopper, color: '#FF70B9', size: 30 },
  { Component: Gift, color: '#9B87F5', size: 28 },
  { Component: Cake, color: '#6EB7FF', size: 32 },
  { Component: Star, color: '#FFD770', size: 24 },
  { Component: Heart, color: '#FF70B9', size: 26 },
  { Component: Sparkles, color: '#A1E887', size: 22 },
  { Component: Music, color: '#FF9B70', size: 28 },
];

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create animated elements
    const items: HTMLDivElement[] = [];
    const count = Math.min(15, window.innerWidth / 100);

    for (let i = 0; i < count; i++) {
      const item = document.createElement('div');
      const randomItem = ITEMS[Math.floor(Math.random() * ITEMS.length)];
      const IconComponent = randomItem.Component;
      
      // Set item styles
      item.style.position = 'absolute';
      item.style.color = randomItem.color;
      item.style.opacity = '0.7';
      item.style.pointerEvents = 'none';
      item.style.zIndex = '0';

      // Set random positions
      item.style.left = `${Math.random() * 100}vw`;
      item.style.top = `${Math.random() * 100}vh`;
      
      // Set animations
      const animType = Math.floor(Math.random() * 3);
      if (animType === 0) {
        item.className = 'animate-float';
      } else if (animType === 1) {
        item.className = 'animate-bounce-slow';
      } else {
        item.className = 'animate-spin-slow';
      }
      
      // Animation delay
      item.style.animationDelay = `${Math.random() * 5}s`;
      
      // Create SVG icon
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', `${randomItem.size}`);
      svg.setAttribute('height', `${randomItem.size}`);
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      
      // Get the path data from the component name
      const iconData = {
        'PartyPopper': 'M5.8 11.3l2.8-2.8 2.7 1.3L13 7l1.8 2.8 2.9-.1-1.1 3-1.1 3-10.4-4.4z M4 21.3v-2.9 M5.3 15.6l-1.9-1.9 M2.4 12.6l2.9-1 M20 21.3v-2.9 M18.7 15.6l1.9-1.9 M21.6 12.6l-2.9-1',
        'Gift': 'M20 12v10H4V12 M2 7h20v5H2V7z M12 22V7 M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
        'Cake': 'M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8 M4 16.5V16.5 M8 13v.01 M12 16v.01 M16 13v.01 M20 16v.01 M2 21h20 M12 4a2 2 0 0 0-2 2v7h4V6a2 2 0 0 0-2-2z',
        'Star': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        'Heart': 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
        'Sparkles': 'M12 3v3m0 12v3M5.25 8.25h-3m19.5 0h-3M7.8 7.8L5.66 5.66M18.2 7.8l2.14-2.14M7.8 16.2l-2.14 2.14M18.2 16.2l2.14 2.14M8.25 12h7.5',
        'Music': 'M9 18V5l12-2v13 M9 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M21 16c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z'
      };
      
      const name = randomItem.Component.name;
      const paths = iconData[name as keyof typeof iconData].split(' M').map((p, i) => i === 0 ? `M${p}` : `M${p}`);
      
      paths.forEach(pathData => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        svg.appendChild(path);
      });
      
      item.appendChild(svg);
      container.appendChild(item);
      items.push(item);
    }

    return () => {
      items.forEach(item => {
        if (container.contains(item)) {
          container.removeChild(item);
        }
      });
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden z-0" />;
};

export default AnimatedBackground;
