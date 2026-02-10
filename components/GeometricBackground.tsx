'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GeometricBackground() {
    const [shapes, setShapes] = useState<any[]>([]);
    const [mathSymbolsArray, setMathSymbolsArray] = useState<any[]>([]);

    useEffect(() => {
        // Generate random shapes on client side only
        const newShapes = [...Array(15)].map((_, i) => ({
            id: i,
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 10,
            type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
            color: [
                'rgba(59, 130, 246, 0.15)', // Blue
                'rgba(255, 140, 0, 0.15)',  // Orange
                'rgba(16, 185, 129, 0.15)', // Green
            ][Math.floor(Math.random() * 3)],
            borderColor: [
                'rgba(59, 130, 246, 0.3)',
                'rgba(255, 140, 0, 0.3)',
                'rgba(16, 185, 129, 0.3)',
            ][Math.floor(Math.random() * 3)],
            rotation: Math.random() * 360,
        }));
        setShapes(newShapes);

        // Generate math symbols on client side only
        const symbols = ['∑', 'π', '∫', '√', '∞', 'Δ', '≈', '≠', '≤', '≥', 'θ', 'λ', 'β', 'α'];
        const newSymbols = [...Array(20)].map((_, i) => ({
            id: i,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            left: Math.random() * 100,
            top: Math.random() * 100,
            fontSize: Math.random() * 20 + 10,
            delay: Math.random() * 5,
            duration: Math.random() * 15 + 10,
            opacity: Math.random() * 0.2 + 0.05,
        }));
        setMathSymbolsArray(newSymbols);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Geometric Shapes */}
            {shapes.map(item => (
                <motion.div
                    key={`shape-${item.id}`}
                    className="absolute"
                    style={{
                        left: `${item.left}%`,
                        top: `${item.top}%`,
                        width: item.width,
                        height: item.height,
                    }}
                    animate={{
                        y: [0, Math.random() * 100 - 50],
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                        delay: item.delay,
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            ...(item.type === 'circle' && {
                                borderRadius: '50%',
                                background: item.color,
                                border: `2px solid ${item.borderColor}`
                            }),
                            ...(item.type === 'square' && {
                                background: item.color,
                                border: `2px solid ${item.borderColor}`,
                                transform: `rotate(${item.rotation}deg)`
                            }),
                            ...(item.type === 'triangle' && {
                                width: 0,
                                height: 0,
                                borderLeft: `${item.width / 2}px solid transparent`,
                                borderRight: `${item.width / 2}px solid transparent`,
                                borderBottom: `${item.height}px solid ${item.color}`,
                            }),
                        }}
                    />
                </motion.div>
            ))}

            {/* Math Symbols */}
            {mathSymbolsArray.map(item => (
                <motion.div
                    key={`symbol-${item.id}`}
                    className="absolute text-gray-400 font-bold select-none"
                    style={{
                        left: `${item.left}%`,
                        top: `${item.top}%`,
                        fontSize: `${item.fontSize}px`,
                        opacity: item.opacity,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [item.opacity, item.opacity * 1.5, item.opacity],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: item.delay,
                    }}
                >
                    {item.symbol}
                </motion.div>
            ))}
        </div>
    );
}
