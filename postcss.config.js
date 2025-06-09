@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global base styles */
body {
  @apply bg-background text-dark font-sans antialiased;
}

/* Utility classes */
.glass {
  @apply backdrop-blur-md bg-white/30 shadow-glass rounded-lg;
}

.btn-header {
  @apply text-sm font-semibold px-4 py-2 rounded-md hover:bg-primary hover:text-white transition duration-300;
}

.fade-in {
  @apply animate-fadeIn;
}
