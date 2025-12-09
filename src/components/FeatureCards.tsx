import { Zap, Heart, CheckCircle } from 'lucide-react';

export function FeatureCards() {
  const features = [
    {
      icon: Zap,
      color: 'text-purple-500',
      title: '速効性',
      description: '症状に合わせた即効性のある解決策を提供します'
    },
    {
      icon: Heart,
      color: 'text-green-500',
      title: '対症療法',
      description: '長期的な健康を考慮した治療を提案します'
    },
    {
      icon: CheckCircle,
      color: 'text-blue-500',
      title: '確かな効果',
      description: '科学的根拠に基づいた確実な効果を実現します'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl mb-3">速く、やさしく、確かな効果を</h2>
        <p className="text-center text-gray-600 mb-12">
          あなたの頭痛のタイプに、ぴったりのケアを提案し、毎日を快適に過ごせるようサポートします。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}