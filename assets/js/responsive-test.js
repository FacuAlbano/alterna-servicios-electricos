/* ========================================
   SISTEMA DE PRUEBAS RESPONSIVO - ALTERNA
   Herramientas para probar responsividad
   ======================================== */

class ResponsiveTest {
    constructor() {
        this.breakpoints = {
            'Mobile S': 320,
            'Mobile M': 375,
            'Mobile L': 425,
            'Tablet': 768,
            'Laptop': 1024,
            'Laptop L': 1440,
            'Desktop': 2560
        };
        
        this.isTestMode = false;
        this.init();
    }

    init() {
        // Solo activar en desarrollo
        if (window.location.hostname === 'localhost' || 
            window.location.hostname === '127.0.0.1' ||
            window.location.search.includes('test=true')) {
            this.createTestControls();
            this.setupViewportIndicator();
            this.setupKeyboardShortcuts();
        }
        
        // Siempre disponible para debugging
        this.setupGlobalFunctions();
        this.monitorViewportChanges();
    }

    createTestControls() {
        console.log('🧪 Creating responsive test controls...');
        
        const controls = document.createElement('div');
        controls.id = 'responsive-controls';
        controls.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            display: none;
            flex-direction: column;
            gap: 8px;
            max-width: 300px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        `;

        // Título
        const title = document.createElement('div');
        title.textContent = '📱 Responsive Test Controls';
        title.style.cssText = `
            font-weight: bold;
            margin-bottom: 10px;
            color: #20b2aa;
            border-bottom: 1px solid #333;
            padding-bottom: 5px;
        `;
        controls.appendChild(title);

        // Información actual
        const currentInfo = document.createElement('div');
        currentInfo.id = 'current-viewport';
        currentInfo.style.cssText = `
            background: rgba(32, 178, 170, 0.2);
            padding: 8px;
            border-radius: 4px;
            margin-bottom: 10px;
        `;
        controls.appendChild(currentInfo);

        // Botones de breakpoints
        Object.entries(this.breakpoints).forEach(([name, width]) => {
            const button = document.createElement('button');
            button.textContent = `${name} (${width}px)`;
            button.style.cssText = `
                background: #333;
                color: white;
                border: 1px solid #555;
                padding: 8px 12px;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.2s;
            `;
            
            button.addEventListener('mouseenter', () => {
                button.style.background = '#20b2aa';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.background = '#333';
            });
            
            button.addEventListener('click', () => {
                this.setViewport(width, name);
            });
            
            controls.appendChild(button);
        });

        // Botón de reset
        const resetButton = document.createElement('button');
        resetButton.textContent = '🔄 Reset Viewport';
        resetButton.style.cssText = `
            background: #dc2626;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 5px;
        `;
        
        resetButton.addEventListener('click', () => {
            this.resetViewport();
        });
        
        controls.appendChild(resetButton);

        // Botón de cerrar
        const closeButton = document.createElement('button');
        closeButton.textContent = '❌ Close';
        closeButton.style.cssText = `
            background: transparent;
            color: #999;
            border: 1px solid #555;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 10px;
            margin-top: 5px;
        `;
        
        closeButton.addEventListener('click', () => {
            controls.style.display = 'none';
            this.isTestMode = false;
        });
        
        controls.appendChild(closeButton);

        document.body.appendChild(controls);
        this.controls = controls;
        this.updateCurrentInfo();
    }

    setupViewportIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'viewport-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 9999;
            background: rgba(32, 178, 170, 0.9);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-family: monospace;
            font-size: 12px;
            font-weight: bold;
            pointer-events: none;
            transition: all 0.3s ease;
        `;

        document.body.appendChild(indicator);
        this.indicator = indicator;
        this.updateIndicator();

        // Actualizar en resize
        window.addEventListener('resize', () => {
            this.updateIndicator();
            this.updateCurrentInfo();
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl + Shift + R para toggle de controles
            if (e.ctrlKey && e.shiftKey && e.key === 'R') {
                e.preventDefault();
                this.toggleControls();
            }
            
            // Ctrl + Shift + 1-7 para cambiar breakpoints
            if (e.ctrlKey && e.shiftKey && e.key >= '1' && e.key <= '7') {
                e.preventDefault();
                const index = parseInt(e.key) - 1;
                const breakpoints = Object.values(this.breakpoints);
                const names = Object.keys(this.breakpoints);
                if (breakpoints[index]) {
                    this.setViewport(breakpoints[index], names[index]);
                }
            }
        });
    }

    setupGlobalFunctions() {
        // Funciones globales para debugging
        window.testResponsive = () => {
            this.toggleControls();
        };

        window.setViewport = (width, height = null) => {
            this.setViewport(width, height);
        };

        window.getCurrentBreakpoint = () => {
            return this.getCurrentBreakpoint();
        };

        window.testAllBreakpoints = () => {
            this.testAllBreakpoints();
        };

        window.analyzeLayout = () => {
            this.analyzeLayout();
        };

        // Log de funciones disponibles
        console.log('📱 Responsive Test Functions Available:');
        console.log('   testResponsive() - Toggle test controls');
        console.log('   setViewport(width, name) - Set specific viewport');
        console.log('   getCurrentBreakpoint() - Get current breakpoint info');
        console.log('   testAllBreakpoints() - Test all breakpoints automatically');
        console.log('   analyzeLayout() - Analyze current layout');
        console.log('   Shortcuts: Ctrl+Shift+R (toggle), Ctrl+Shift+1-7 (breakpoints)');
    }

    monitorViewportChanges() {
        let lastWidth = window.innerWidth;
        
        window.addEventListener('resize', () => {
            const currentWidth = window.innerWidth;
            const lastBreakpoint = this.getBreakpointForWidth(lastWidth);
            const currentBreakpoint = this.getBreakpointForWidth(currentWidth);
            
            if (lastBreakpoint !== currentBreakpoint) {
                console.log(`📱 Breakpoint changed: ${lastBreakpoint} → ${currentBreakpoint}`);
                this.checkResponsiveElements();
            }
            
            lastWidth = currentWidth;
        });
    }

    toggleControls() {
        if (!this.controls) {
            this.createTestControls();
        }
        
        this.isTestMode = !this.isTestMode;
        this.controls.style.display = this.isTestMode ? 'flex' : 'none';
        
        if (this.isTestMode) {
            console.log('🧪 Responsive test mode activated');
            this.updateCurrentInfo();
        } else {
            console.log('🧪 Responsive test mode deactivated');
        }
    }

    setViewport(width, name = null) {
        // Para navegadores que soportan resize programático (solo en desarrollo)
        if (window.outerWidth && window.outerHeight) {
            const heightRatio = window.outerHeight / window.outerWidth;
            const newHeight = Math.round(width * heightRatio);
            
            try {
                window.resizeTo(width, newHeight);
                console.log(`📱 Viewport set to: ${width}x${newHeight} (${name || 'Custom'})`);
            } catch (e) {
                console.log(`📱 Cannot resize window, but would be: ${width}px (${name || 'Custom'})`);
                console.log('💡 Try using browser dev tools for responsive testing');
            }
        }
        
        this.updateCurrentInfo();
        this.highlightCurrentBreakpoint(name);
    }

    resetViewport() {
        try {
            window.resizeTo(screen.availWidth, screen.availHeight);
            console.log('🔄 Viewport reset to full size');
        } catch (e) {
            console.log('🔄 Reset viewport - use browser controls');
        }
        
        this.updateCurrentInfo();
    }

    updateIndicator() {
        if (!this.indicator) return;
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        const breakpoint = this.getCurrentBreakpoint();
        
        this.indicator.textContent = `${breakpoint.name} ${width}×${height}`;
        
        // Color coding
        if (width < 768) {
            this.indicator.style.background = 'rgba(239, 68, 68, 0.9)'; // Rojo para móvil
        } else if (width < 1024) {
            this.indicator.style.background = 'rgba(245, 158, 11, 0.9)'; // Naranja para tablet
        } else {
            this.indicator.style.background = 'rgba(34, 197, 94, 0.9)'; // Verde para desktop
        }
    }

    updateCurrentInfo() {
        if (!this.controls) return;
        
        const currentInfo = document.getElementById('current-viewport');
        if (!currentInfo) return;
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        const breakpoint = this.getCurrentBreakpoint();
        
        currentInfo.innerHTML = `
            <strong>Current:</strong> ${width} × ${height}<br>
            <strong>Breakpoint:</strong> ${breakpoint.name}<br>
            <strong>Range:</strong> ${breakpoint.min}-${breakpoint.max}px
        `;
    }

    getCurrentBreakpoint() {
        const width = window.innerWidth;
        return this.getBreakpointForWidth(width);
    }

    getBreakpointForWidth(width) {
        if (width < 425) return { name: 'Mobile', min: 320, max: 424 };
        if (width < 768) return { name: 'Mobile L', min: 425, max: 767 };
        if (width < 1024) return { name: 'Tablet', min: 768, max: 1023 };
        if (width < 1440) return { name: 'Laptop', min: 1024, max: 1439 };
        return { name: 'Desktop', min: 1440, max: 'Infinity' };
    }

    highlightCurrentBreakpoint(name) {
        if (!this.controls) return;
        
        const buttons = this.controls.querySelectorAll('button');
        buttons.forEach(btn => {
            if (btn.textContent.includes(name)) {
                btn.style.background = '#20b2aa';
                setTimeout(() => {
                    btn.style.background = '#333';
                }, 1000);
            }
        });
    }

    testAllBreakpoints() {
        console.log('🔄 Testing all breakpoints automatically...');
        const breakpoints = Object.entries(this.breakpoints);
        let index = 0;

        const testNext = () => {
            if (index < breakpoints.length) {
                const [name, width] = breakpoints[index];
                console.log(`📱 Testing: ${name} (${width}px)`);
                this.setViewport(width, name);
                
                setTimeout(() => {
                    this.analyzeLayout();
                    index++;
                    testNext();
                }, 2000);
            } else {
                console.log('✅ All breakpoints tested');
                this.resetViewport();
            }
        };

        testNext();
    }

    analyzeLayout() {
        const width = window.innerWidth;
        const breakpoint = this.getCurrentBreakpoint();
        
        console.log(`🔍 Layout Analysis - ${breakpoint.name} (${width}px)`);
        
        // Analizar elementos principales
        const elements = [
            { name: 'Header', selector: '#header' },
            { name: 'Hero', selector: '#hero' },
            { name: 'Services Grid', selector: '.services-grid' },
            { name: 'Metrics Grid', selector: '.metrics-grid' },
            { name: 'Contact Grid', selector: '.contact-grid' },
            { name: 'Footer', selector: '.footer' }
        ];

        elements.forEach(({ name, selector }) => {
            const element = document.querySelector(selector);
            if (element) {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.width > 0 && rect.height > 0;
                const hasOverflow = element.scrollWidth > element.clientWidth;
                
                console.log(`  ${name}: ${rect.width.toFixed(0)}×${rect.height.toFixed(0)}px ${isVisible ? '✅' : '❌'} ${hasOverflow ? '⚠️ overflow' : ''}`);
            }
        });

        // Detectar elementos problemáticos
        this.checkResponsiveElements();
    }

    checkResponsiveElements() {
        const problems = [];
        
        // Verificar elementos que se salen del viewport
        document.querySelectorAll('*').forEach(el => {
            if (el.scrollWidth > window.innerWidth + 10) { // +10px de tolerancia
                const rect = el.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                    problems.push({
                        element: el,
                        issue: 'horizontal overflow',
                        width: el.scrollWidth
                    });
                }
            }
        });

        // Verificar imágenes sin lazy loading
        document.querySelectorAll('img').forEach(img => {
            if (!img.hasAttribute('loading') && !img.hasAttribute('data-src')) {
                problems.push({
                    element: img,
                    issue: 'missing lazy loading',
                    src: img.src
                });
            }
        });

        if (problems.length > 0) {
            console.warn('⚠️ Responsive issues found:');
            problems.forEach(problem => {
                console.warn(`  - ${problem.issue}:`, problem.element);
            });
        } else {
            console.log('✅ No responsive issues detected');
        }

        return problems;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.responsiveTest = new ResponsiveTest();
});

// Mensaje inicial para desarrolladores
console.log('📱 Responsive Test System Loaded');
console.log('   Use testResponsive() to start testing');
console.log('   Press Ctrl+Shift+R to toggle test controls');
