// pagination　分割されたページでデータを表示する機能
// ページ番号のリストを作成し、クリックすると特定のページ番号に対応するデータを表示するためにpaginate関数を呼び出している

import React from "react";

// Paginationコンポーネントが受け取るpropsの型を定義
interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  onNavClick?: () => void; // オプショナルなクリックハンドラ
}

// Reactの関数型コンポーネントを表してる　<PaginationProps> はTypeScriptのジェネリック型引数を使用
const Pagination: React.FC<PaginationProps> = ({
  // propsの分割代入
  itemsPerPage,
  totalItems,
  paginate,
  onNavClick,
}) => {
  const pageNumbers = []; // ページ番号を格納するための空の配列を初期化

  // ページ数が1より大きい場合、または0の場合でも1を追加
  const totalPageCount = Math.ceil(totalItems / itemsPerPage);
  const pageCountToShow = totalPageCount > 1 ? totalPageCount : 1;

  for (let i = 1; i <= pageCountToShow; i++) {
    pageNumbers.push(i);
    // 必要なページ数を計算し、その数だけpageNumbers配列にページ番号を追加します。
    // Math.ceilは引数の数値を上に丸める関数です。これにより、全アイテムを均等に分配した場合に必要なページ数が得られます。
  }

  return (
    <nav
      className="fixed bottom-1 left-0 right-0 flex justify-center items-center p-4 border-t border-black text-2xl"
      onClick={() => onNavClick && onNavClick()}
    >
      <ul className="flex justify-center space-x-5">
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <a
              onClick={(e) => {
                e.stopPropagation(); // navのクリックイベントを止める
                paginate(number);
              }}
              className="border-2 py-1 px-3 border-zinc-400 hover:border-slate-900"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
