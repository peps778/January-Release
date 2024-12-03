module.exports = {
  content: [
    "./**/*.html",          // All HTML files in the project, including those in subdirectories
    "./**/*.js",            // All JavaScript files in the project, including those in subdirectories
    "./**/*.css",           // All CSS files in the project, including those in subdirectories
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#FDA2A7',  
        'custom-blue': '#1F3449',  
        'custom-black': '#000000',
        'custom-background': '#FBEBDF',  
      },
    },
  },
  plugins: [],
}
