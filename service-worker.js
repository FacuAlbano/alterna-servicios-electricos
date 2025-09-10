// Service Worker para Alterna 2.0
// Implementa funcionalidades PWA y cache inteligente

const CACHE_NAME = 'alterna-2.0-v1.0.0';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Archivos para cachear en instalación
const STATIC_ASSETS = [
    '/',
    '/alterna-2.0.html',
    '/assets/images/LogoAlterna-removebg-preview.png',
    '/assets/images/LogoAlterna.jpg',
    '/assets/images/image.jpg',
    '/assets/css/main.css',
    '/assets/js/main.js',
    '/assets/js/components.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
    'https://unpkg.com/gsap@3.12.2/dist/gsap.min.js',
    'https://unpkg.com/gsap@3.12.2/dist/ScrollTrigger.min.js',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.css'
];

// URLs que no deben ser cacheadas
const EXCLUDED_URLS = [
    '/admin',
    '/api',
    '/analytics',
    'google-analytics.com',
    'googletagmanager.com'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
    console.log('🚀 Service Worker: Instalando Alterna 2.0 PWA...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('📦 Service Worker: Cacheando archivos estáticos...');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('✅ Service Worker: Instalación completada');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Service Worker: Error en instalación:', error);
            })
    );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
    console.log('🔄 Service Worker: Activando...');
    
    event.waitUntil(
        Promise.all([
            // Limpiar caches antiguos
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('🗑️ Service Worker: Eliminando cache antiguo:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Tomar control inmediato
            self.clients.claim()
        ]).then(() => {
            console.log('✅ Service Worker: Activado y listo');
        })
    );
});

// Interceptar peticiones de red
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Ignorar peticiones que no deben ser cacheadas
    if (shouldExcludeUrl(url.href)) {
        return;
    }
    
    // Estrategia diferente según el tipo de recurso
    if (request.destination === 'document') {
        // Para documentos HTML: Cache First con Network Fallback
        event.respondWith(cacheFirstWithNetworkFallback(request));
    } else if (isStaticAsset(request)) {
        // Para assets estáticos: Cache First
        event.respondWith(cacheFirst(request));
    } else {
        // Para otros recursos: Network First con Cache Fallback
        event.respondWith(networkFirstWithCacheFallback(request));
    }
});

// Estrategia Cache First con Network Fallback
async function cacheFirstWithNetworkFallback(request) {
    try {
        const cacheResponse = await caches.match(request);
        if (cacheResponse) {
            console.log('📦 Servido desde cache:', request.url);
            return cacheResponse;
        }
        
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
            console.log('🌐 Servido desde red y cacheado:', request.url);
        }
        
        return networkResponse;
    } catch (error) {
        console.error('❌ Error en Cache First:', error);
        
        // Fallback a página offline si está disponible
        if (request.destination === 'document') {
            const offlinePage = await caches.match('/offline.html');
            return offlinePage || new Response('Página no disponible offline', { 
                status: 503,
                statusText: 'Service Unavailable' 
            });
        }
        
        throw error;
    }
}

// Estrategia Cache First para assets estáticos
async function cacheFirst(request) {
    const cacheResponse = await caches.match(request);
    
    if (cacheResponse) {
        console.log('📦 Asset estático desde cache:', request.url);
        return cacheResponse;
    }
    
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, networkResponse.clone());
            console.log('🌐 Asset estático cacheado:', request.url);
        }
        
        return networkResponse;
    } catch (error) {
        console.error('❌ Error cargando asset estático:', error);
        throw error;
    }
}

// Estrategia Network First con Cache Fallback
async function networkFirstWithCacheFallback(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
            console.log('🌐 Recurso dinámico desde red:', request.url);
        }
        
        return networkResponse;
    } catch (error) {
        console.log('📦 Red falló, intentando cache:', request.url);
        
        const cacheResponse = await caches.match(request);
        if (cacheResponse) {
            console.log('📦 Recurso dinámico desde cache:', request.url);
            return cacheResponse;
        }
        
        console.error('❌ Error en Network First:', error);
        throw error;
    }
}

// Verificar si una URL debe ser excluida del cache
function shouldExcludeUrl(url) {
    return EXCLUDED_URLS.some(excludedUrl => url.includes(excludedUrl));
}

// Verificar si es un asset estático
function isStaticAsset(request) {
    return request.destination === 'image' || 
           request.destination === 'font' || 
           request.destination === 'style' ||
           request.url.includes('.css') ||
           request.url.includes('.js') ||
           request.url.includes('.woff') ||
           request.url.includes('.woff2') ||
           request.url.includes('.ttf');
}

// Manejar mensajes del cliente
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('⏭️ Service Worker: Saltando espera...');
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }
    
    if (event.data && event.data.type === 'CACHE_STATS') {
        getCacheStats().then(stats => {
            event.ports[0].postMessage(stats);
        });
    }
});

// Obtener estadísticas del cache
async function getCacheStats() {
    const cacheNames = await caches.keys();
    const stats = {};
    
    for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();
        stats[cacheName] = requests.length;
    }
    
    return stats;
}

// Sincronización en segundo plano
self.addEventListener('sync', event => {
    if (event.tag === 'contact-form-sync') {
        console.log('🔄 Sincronizando formularios pendientes...');
        event.waitUntil(syncPendingForms());
    }
});

// Sincronizar formularios pendientes
async function syncPendingForms() {
    try {
        const pendingForms = await getPendingForms();
        
        for (const formData of pendingForms) {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                if (response.ok) {
                    await removePendingForm(formData.id);
                    console.log('✅ Formulario sincronizado:', formData.id);
                }
            } catch (error) {
                console.error('❌ Error sincronizando formulario:', error);
            }
        }
    } catch (error) {
        console.error('❌ Error en sincronización de formularios:', error);
    }
}

// Gestión de formularios pendientes (simulado con IndexedDB)
async function getPendingForms() {
    // Implementar con IndexedDB en una versión más avanzada
    return [];
}

async function removePendingForm(id) {
    // Implementar con IndexedDB en una versión más avanzada
    return true;
}

// Notificaciones push (preparado para futura implementación)
self.addEventListener('push', event => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/assets/images/LogoAlterna-removebg-preview.png',
            badge: '/assets/images/LogoAlterna-removebg-preview.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: data.primaryKey || 1
            },
            actions: [
                {
                    action: 'explore',
                    title: 'Ver detalles',
                    icon: '/assets/images/LogoAlterna-removebg-preview.png'
                },
                {
                    action: 'close',
                    title: 'Cerrar',
                    icon: '/assets/images/LogoAlterna-removebg-preview.png'
                }
            ]
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

// Manejar clics en notificaciones
self.addEventListener('notificationclick', event => {
    console.log('🔔 Clic en notificación:', event.notification);
    
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            self.clients.openWindow('/')
        );
    }
});

// Logging y diagnósticos
self.addEventListener('error', event => {
    console.error('❌ Error en Service Worker:', event.error);
});

self.addEventListener('unhandledrejection', event => {
    console.error('❌ Promise rechazada en Service Worker:', event.reason);
});

console.log('🚀 Alterna 2.0 Service Worker cargado correctamente');
