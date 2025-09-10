# 🚀 Alterna 2.0 - Servicios Eléctricos del Futuro

![Alterna 2.0](assets/images/LogoAlterna-removebg-preview.png)

## 🌟 Descripción

**Alterna 2.0** representa la evolución completa de los servicios eléctricos industriales. Esta versión revolucionaria combina tecnologías de vanguardia, diseño futurista y funcionalidades innovadoras para crear una experiencia web única que refleja la excelencia en ingeniería eléctrica.

## ✨ Características Principales

### 🎨 Diseño y UX/UI Futurista
- **Single Page Application (SPA)** completa
- **Modo claro/oscuro** con transiciones suaves
- **Animaciones GSAP** avanzadas y fluidas
- **Efectos parallax** y hover innovadores
- **Diseño responsive** optimizado para todos los dispositivos
- **Tipografía moderna** con Inter y JetBrains Mono

### 🛠️ Tecnologías Modernas
- **GSAP (GreenSock)** - Animaciones profesionales
- **Swiper.js** - Carrusel 3D interactivo
- **Particles.js** - Efectos de partículas dinámicas
- **AOS (Animate On Scroll)** - Animaciones al hacer scroll
- **CountUp.js** - Contadores animados
- **EmailJS** - Envío de emails sin backend

### 🌐 Funcionalidades Avanzadas
- **Traductor automático** con Google Translate API
- **Formulario inteligente** con validaciones 100% seguras
- **Lazy loading** para optimización de performance
- **Métricas animadas** en tiempo real
- **Timeline interactiva** de la empresa
- **Galería de proyectos** con efectos 3D

### 📊 Métricas Destacadas
- ✅ **150+ Proyectos Completados**
- ✅ **85+ Clientes Satisfechos**
- ✅ **6 Años de Innovación**
- ✅ **12 Ingenieros Especialistas**

## 🏢 Clientes Destacados

- **Louis Dreyfus Company**
- **ACA - Asociación de Cooperativas Argentinas**
- **YPF**
- **Gerdau - Siderco**
- **Nueva Cristalería Rosario**
- **Autocréditos Desarrollos**
- **Prestucol - Premecol**
- **Aceros Coco**
- **Movi**
- **Doing**
- **Pampa Global - La Cumbre**
- **Briket**
- **Frimetal-Electrolux**
- **LyL Futura**
- **Torrezan**
- **Sanimat**
- **Tesser y Tesser**
- **Dawi**
- **Supermercados Oroño**
- **Industrias Químicas BG S.R.L. - Thaxol**
- **R. Orión SRL**

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js 16+ 
- NPM 8+
- Navegador moderno

### Instalación Local
```bash
# Clonar el repositorio
git clone https://github.com/facualbano/alterna-2.0.git

# Navegar al directorio
cd alterna-2.0

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Deploy en Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📁 Estructura del Proyecto

```
alterna-2.0/
├── alterna-2.0.html          # Página principal
├── assets/
│   ├── css/                  # Estilos modulares
│   ├── images/               # Imágenes optimizadas
│   └── js/                   # Scripts modulares
├── views/
│   ├── components/           # Componentes reutilizables
│   └── pages/                # Páginas adicionales
├── package.json              # Configuración NPM
├── vercel.json              # Configuración Vercel
└── README.md                # Documentación

```

## 🛠️ Servicios Especializados

### ⚡ Diseño de Proyectos Electromecánicos
- Proyectos industriales MT/BT
- Cálculos y dimensionamientos
- Planos técnicos especializados

### 🛡️ Puesta a Tierra y Pararrayos
- Según resolución SRT 900/15
- Mediciones especializadas
- Sistemas de protección

### 🔌 Instalaciones Eléctricas
- Auditorías especializadas
- Montaje profesional
- Cumplimiento AEA 930364

### 🌱 Energías Renovables
- Sistemas solares fotovoltaicos
- Eficiencia energética
- Optimización de consumo

### 🔧 Mantenimiento Predictivo
- Termografía avanzada
- Análisis predictivo
- IoT para monitoreo

### 🎓 Capacitación Especializada
- Seguridad eléctrica
- Mantenimiento industrial
- Automatización

## 🌍 Configuración de Idiomas

La página soporta múltiples idiomas:
- 🇪🇸 Español (predeterminado)
- 🇺🇸 English
- 🇧🇷 Português
- 🇫🇷 Français
- 🇮🇹 Italiano
- 🇩🇪 Deutsch

## 📧 Configuración de EmailJS

Para configurar el formulario de contacto:

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Obtener:
   - Service ID
   - Template ID
   - User ID
3. Reemplazar en `alterna-2.0.html`:
   ```javascript
   emailjs.init("tu_user_id_aqui");
   // Y en la función de envío:
   emailjs.send('tu_service_id', 'tu_template_id', {...})
   ```

## 🎨 Personalización de Temas

### Variables CSS Principales
```css
:root {
  --primary-color: #20b2aa;
  --accent-color: #48cae4;
  --text-primary: #1a1a1a;
  --bg-primary: #ffffff;
  /* ... más variables */
}
```

### Cambio de Tema Programático
```javascript
// Cambiar a tema oscuro
setTheme('dark');

// Cambiar a tema claro
setTheme('light');
```

## 📈 Optimizaciones Implementadas

- **Lazy Loading** de imágenes
- **Debounced scroll events**
- **Optimización de animaciones** con `will-change`
- **Compresión de assets**
- **Service Workers** preparado
- **SEO optimizado** con meta tags

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor desarrollo
npm run build    # Build producción
npm run deploy   # Deploy a Vercel
npm run preview  # Preview deploy
npm run lint     # Lint código
npm run test     # Tests
```

## 🌐 Demo en Vivo

🔗 **[Ver Demo](https://alterna2.vercel.app)**

## 📞 Contacto

- **Teléfono:** [(54-341) 385-6810](https://wa.me/5493413856810)
- **Email:** info@alterna2.com.ar
- **Ubicación:** Rosario, Santa Fe, Argentina
- **Web:** www.alterna2.com.ar

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- **GSAP** por las increíbles animaciones
- **Swiper.js** por el carrusel 3D
- **Particles.js** por los efectos visuales
- **Google Fonts** por la tipografía
- **Vercel** por el hosting

---

<div align="center">
  <h3>🚀 Hecho con ❤️ por el equipo de Alterna</h3>
  <p><strong>Alterna 2.0 - El Futuro de los Servicios Eléctricos</strong></p>
</div>