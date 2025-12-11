import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function DataSection() {
  const recoveryData = [
    { time: '0日', value: 80 },
    { time: '30日', value: 65 },
    { time: '60日', value: 50 },
    { time: '90日', value: 35 },
    { time: '120日', value: 25 },
    { time: '150日', value: 20 },
    { time: '180日', value: 15 }
  ];

  const stats = [
    { percentage: '75%', label: '痛みの軽減率', sublabel: '3ヶ月で改善を実感' },
    { percentage: '80%', label: '予防率', sublabel: '継続利用で予防' },
    { percentage: '85%', label: '満足度', sublabel: 'ユーザーが推奨' }
  ];

  return (
    <section id="how-to-use" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl mb-3">作用メカニズムをデータで見る</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          ヘッドリリースは科学に、どのように痛み軽減を実現するか。
          <br />
          統計データ・エビデンスに基づくシステムにより、最大限の効果が実現されます。
        </p>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="mb-2">痛みの軽減指数（MAXスケール）</h3>
            <p className="text-gray-600 text-sm mb-6">
              毎日の記録から、頭痛が起こる頻度が徐々に減っていく様子が分かります
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={recoveryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" stroke="#999" tick={{ fontSize: 12 }} />
                <YAxis stroke="#999" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-flex items-center justify-center mb-4">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40 * parseInt(stat.percentage) / 100} ${2 * Math.PI * 40}`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-2xl text-green-500">{stat.percentage}</span>
              </div>
              <h3 className="mb-1">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}