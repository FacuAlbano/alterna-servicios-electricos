# Alterna - Servicios Eléctricos

Sitio web moderno y responsivo para Alterna Servicios Eléctricos, desarrollado con una arquitectura MVC (Model-View-Controller) para mejor mantenibilidad y organización del código.

## 🏗️ Estructura del Proyecto (MVC)

```
Alterna/
├── index.html                 # Página de redirección automática
├── assets/                    # Recursos estáticos
│   ├── css/                  # Archivos CSS organizados por componente
│   │   ├── base.css          # Variables, reset y estilos base
│   │   ├── navigation.css    # Estilos de navegación
│   │   ├── hero.css          # Estilos del hero section
│   │   ├── services.css      # Estilos de servicios
│   │   ├── page-hero.css     # Estilos para páginas con hero
│   │   ├── about.css         # Estilos de "Sobre Nosotros"
│   │   ├── partners.css      # Estilos de "Trabajamos Juntos"
│   │   ├── gallery.css       # Estilos de galería y carrusel
│   │   ├── contact.css       # Estilos de contacto
│   │   ├── footer.css        # Estilos del footer
│   │   └── main.css          # Archivo principal que importa todos los CSS
│   ├── js/                   # Archivos JavaScript
│   │   ├── components.js     # Componentes JavaScript
│   │   ├── main.js           # Archivo principal de JavaScript
│   │   └── script.js         # Scripts adicionales
│   └── images/               # Imágenes del proyecto
│       ├── image.jpg
│       ├── Image2.jpg
│       ├── LogoAlterna.jpg
│       └── LogoAlterna-removebg-preview.png
├── views/                    # Vistas (V del MVC)
│   ├── components/           # Componentes reutilizables
│   │   ├── header.html       # Componente de navegación
│   │   └── footer.html       # Componente de footer
│   └── pages/                # Páginas principales
│       ├── index.html        # Página principal
│       ├── sobre-nosotros.html
│       ├── servicios.html
│       ├── trabajamos-juntos.html
│       ├── galeria.html
│       └── contacto.html
├── controllers/              # Controladores (C del MVC)
│   ├── AppController.js      # Controlador principal de la aplicación
│   ├── GalleryController.js  # Controlador para la galería
│   └── ContactController.js  # Controlador para el formulario de contacto
├── models/                   # Modelos (M del MVC) - Futuro
├── package.json              # Configuración del proyecto
├── .gitignore               # Archivos a ignorar en Git
└── README.md                 # Documentación
```

## 🎨 Características del Diseño

### Paleta de Colores
- **Turquesa Principal**: `#20b2aa`
- **Turquesa Acento**: `#48cae4`
- **Gris Oscuro**: `#1a1a1a`
- **Gris Medio**: `#4a4a4a`
- **Gris Claro**: `#f5f5f5`
- **Blanco**: `#ffffff`

### Componentes Principales
- **Navegación Transparente**: Se adapta al fondo de la página
- **Hero Section**: Con imagen de fondo y contenido posicionado
- **Servicios Destacados**: Cards con efectos hover
- **Galería con Carrusel**: Auto-play con controles manuales
- **Formulario de Contacto**: Con validación en tiempo real
- **Diseño Responsivo**: Adaptado para todos los dispositivos

## 🚀 Funcionalidades

### Navegación
- Menú responsive con hamburger en móviles
- Navegación activa automática
- Scroll suave entre secciones

### Galería
- Carrusel automático con pausa en hover
- Controles manuales (botones y dots)
- Grid de galería con efectos hover
- Overlays informativos en las imágenes

### Formulario de Contacto
- Validación en tiempo real
- Campos requeridos: nombre, email, servicio, mensaje
- Campo opcional: teléfono
- Estados de carga y feedback

### Animaciones
- Efectos hover en cards y botones
- Animaciones de entrada al hacer scroll
- Transiciones suaves en todos los elementos

## 📱 Responsive Design

El sitio está completamente optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Flexbox, Grid, Animaciones
- **JavaScript ES6+**: Clases, módulos, async/await
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía Inter

## 🔧 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone [url-del-repositorio]
   cd Alterna
   ```

2. **Servidor local**:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server
   
   # Con npm (usando el script del package.json)
   npm start
   ```

3. **Abrir en el navegador**:
   ```
   http://localhost:8000
   ```

## 📁 Organización MVC

### Views (Vistas)
- **Componentes**: Header y footer reutilizables en `views/components/`
- **Páginas**: Todas las páginas HTML en `views/pages/`
- **Separación**: CSS organizado por componente en `assets/css/`

### Controllers (Controladores)
- **AppController**: Lógica general de la aplicación
- **GalleryController**: Funcionalidad del carrusel
- **ContactController**: Validación y envío de formularios

### Models (Modelos)
- Preparado para futuras implementaciones de datos
- Estructura lista para integración con backend

## 🎯 Ventajas de la Estructura MVC

1. **Mantenibilidad**: Código organizado y fácil de mantener
2. **Reutilización**: Componentes reutilizables
3. **Escalabilidad**: Fácil agregar nuevas funcionalidades
4. **Separación de Responsabilidades**: Cada archivo tiene una función específica
5. **Testing**: Estructura preparada para testing unitario

## 🔄 Futuras Mejoras

- [ ] Implementar modelos para datos dinámicos
- [ ] Agregar sistema de notificaciones
- [ ] Implementar lazy loading para imágenes
- [ ] Agregar animaciones más avanzadas
- [ ] Implementar PWA (Progressive Web App)
- [ ] Agregar sistema de temas (dark/light mode)

## 📞 Contacto

Para consultas sobre el proyecto:
- **Email**: info@alterna.com.ar
- **Teléfono**: (54-341) 153 856810

---

**Desarrollado con ❤️ para Alterna Servicios Eléctricos**
