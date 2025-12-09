export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-900">ヘッドリリース</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">製品特徴</a>
            <a href="#how-to-use" className="text-gray-600 hover:text-gray-900">データ</a>
            <a href="#reviews" className="text-gray-600 hover:text-gray-900">利用者の声</a>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
              今すぐ試す
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}