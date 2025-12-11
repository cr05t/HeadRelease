export function TestimonialsSection() {
  const testimonials = [
    {
      name: '鈴木さん',
      age: '30代女性',
      avatar: '👩',
      text: '長年悩んでいた片頭痛が、使い始めて1ヶ月で劇的に改善しました。今では頭痛のない日々を過ごせるようになり、本当に感謝しています。'
    },
    {
      name: '佐々木さん',
      age: '40代男性',
      avatar: '👨',
      text: '仕事のストレスで頻繁に頭痛に悩まされていましたが、ヘッドリリースのおかげで症状が大幅に軽減。もっと早く知りたかったです！'
    },
    {
      name: '田中さん',
      age: '50代女性',
      avatar: '👩',
      text: '使い方も簡単で、毎日続けやすいのが良いですね。3ヶ月経った今では、あれほど悩んでいた緊張型頭痛もほとんど気にならなくなりました。'
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl mb-12">利用者の声</h2>
        <p className="text-center text-gray-600 mb-12">
          実際に使用された方々から、どのような感想をいただきました
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-sm">{testimonial.name}</h3>
                  <p className="text-gray-500 text-xs">{testimonial.age}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}