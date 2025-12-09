import heroImage from 'figma:asset/335759665c498aaf3b075e4114032f191443c2ae.png';

export function HeroSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(20, 60, 40, 0.8), rgba(100, 140, 120, 0.6)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
          }}
        >
          <div className="px-8 py-16 md:px-16 md:py-24">
            <h1 className="text-white text-4xl md:text-5xl max-w-md mb-4">
              繰り返す頭痛に、さよならを。
            </h1>
            <p className="text-white/90 max-w-md mb-8">
              最新AIがあなたの頭痛パターンを解析し、最適な解決策を提案します。
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded hover:bg-green-600 transition">
              詳しく見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
