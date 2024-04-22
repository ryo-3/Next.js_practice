// 選択状態の色　bg-blue-100
const useTodoSelectStyle = (isSelected: boolean): string => {
    return isSelected ? "Bg_blue" : "";
};
// useTodoSelectStyle はReactのカスタムフックです。この関数はisSelectedというブール値を引数として受け取り、
// その値に基づいて特定のスタイルクラス名を返します。選択されている（isSelectedがtrue）場合は "bg-blue-100"
//  を返し、そうでない場合は空文字列を返します。

export default useTodoSelectStyle;