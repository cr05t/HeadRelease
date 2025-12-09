export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 ヘッドリリース All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#terms" className="text-gray-600 text-sm hover:text-gray-900">利用規約</a>
            <a href="#privacy" className="text-gray-600 text-sm hover:text-gray-900">プライバシーポリシー</a>
            <a href="#contact" className="text-gray-600 text-sm hover:text-gray-900">お問い合わせ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
