
<lov-update selector="img[ref='logoRef']">
ref={logoRef}
src="/brain2.png" 
alt="kWattz Brain Logo" 
className="w-full max-w-[12xl] mx-auto"
style={{ 
  objectFit: 'contain',
  opacity: logoReached ? 1 : 0.3,
  transition: 'opacity 0.8s ease-out',
  filter: 'drop-shadow(0 0 10px rgba(195, 255, 68, 0.4))'
}}
</lov-update>
