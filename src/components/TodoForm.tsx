// TodoForm　todoリストの送信フォーム、ボタン

import React, { useState } from "react"; //useStateはコンポーネントのローカル状態の管理

// Interface と Function の主な違い
// 目的: interfaceは型の定義に使用され、functionは実行可能なコードのブロックを定義するために使用されます。
// 型チェック: interfaceはTypeScriptの型システムの一部として、コンパイル時の型安全を提供します。
// function自体は型チェックの対象ではなく、関数のパラメーターや戻り値の型に関するチェックを行うことができます。
// 言語: interfaceはTypeScript特有の機能であり、JavaScriptには存在しません。functionはJavaScriptとTypeScriptの両方に存在します。
interface TodoFormProps {
  // TodoFormProps はaddTodo という関数をプロパティとして持つ　この関数は文字列を引数に取り、戻り値は void（何も返さない）
  addTodo: (newTodo: string) => void;
}

// TodoForm という関数コンポーネントを定義　このコンポーネントは React.FC（Functional Component）型を使用しており、
// TodoFormProps 型のプロパティを受け取る　引数の分割代入を通じて addTodo 関数を直接受け取る
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  // useState フックを使用して newTodo という状態変数と、その状態を更新するための関数 setNewTodo を初期化 初期値は空の文字列 ""
  const [newTodo, setNewTodo] = useState("");

  // テキスト入力フィールドの値が変更されたときに呼び出されるイベントハンドラ。
  // イベントオブジェクト e から入力された新しい値 e.target.value を取得し、setNewTodo を使用して newTodo 状態を更新します。
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  // Enter キーが押された場合に addTodo 関数を呼び出し、引数として現在の newTodo を渡します。その後、newTodo を空文字列にリセットします。
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  // ボタンがクリックされたときに実行
  const handleSubmit = () => {
    // addTodo 関数を呼び出し、現在の newTodo を渡した後、newTodo を空文字列にリセットします。
    addTodo(newTodo);
    setNewTodo("");
  };

  // コンポーネントがレンダリングする JSX を返す　テキスト入力フィールドとボタンが含れる
  // 入力フィールドには onChange と onKeyDown イベントハンドラが設定され、ボタンには onClick イベントハンドラが設定
  return (
    <div className="">
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className=" border-2 border-black rounded-md px-1.5 ss:w-48 mx-4"
      />
      <button
        onClick={handleSubmit}
        className=" absolute border-2 border-black px-4 rounded sp:px-3"
      >
        追加
      </button>
    </div>
  );
};
export default TodoForm;
