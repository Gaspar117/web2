export default function SpendingChart() {
  const categories = [
    { name: 'Alimentação', amount: 1240, percentage: 35, color: 'bg-blue-500' },
    { name: 'Moradia', amount: 1200, percentage: 34, color: 'bg-green-500' },
    { name: 'Transporte', amount: 450, percentage: 13, color: 'bg-yellow-500' },
    { name: 'Lazer', amount: 380, percentage: 11, color: 'bg-purple-500' },
    { name: 'Outros', amount: 250, percentage: 7, color: 'bg-red-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Gastos por Categoria</h2>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
              <span className="text-sm font-semibold text-gray-900">R$ {category.amount}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${category.color} h-2.5 rounded-full transition-all duration-500`}
                style={{ width: `${category.percentage}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{category.percentage}%</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Total de Gastos</span>
          <span className="text-lg font-bold text-gray-900">R$ 3.520,00</span>
        </div>
      </div>
    </div>
  );
}
