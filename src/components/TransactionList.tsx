import { ArrowUpRight, ArrowDownLeft, ShoppingCart, Home, Utensils, Car } from 'lucide-react';

const transactions = [
  { id: 1, name: 'Supermercado Extra', category: 'Alimentação', amount: -245.50, date: '10/02/2026', icon: ShoppingCart },
  { id: 2, name: 'Salário - Empresa XYZ', category: 'Receita', amount: 5500.00, date: '05/02/2026', icon: ArrowDownLeft },
  { id: 3, name: 'Aluguel', category: 'Moradia', amount: -1200.00, date: '01/02/2026', icon: Home },
  { id: 4, name: 'Restaurante', category: 'Alimentação', amount: -89.90, date: '08/02/2026', icon: Utensils },
  { id: 5, name: 'Combustível', category: 'Transporte', amount: -150.00, date: '07/02/2026', icon: Car },
  { id: 6, name: 'Freelance - Projeto', category: 'Receita', amount: 1200.00, date: '06/02/2026', icon: ArrowDownLeft },
];

export default function TransactionList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Transações Recentes</h2>
        <button className="text-green-600 text-sm font-medium hover:text-green-700">
          Ver todas
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;
          const isIncome = transaction.amount > 0;

          return (
            <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${isIncome ? 'bg-green-100' : 'bg-red-100'}`}>
                  <Icon className={`h-5 w-5 ${isIncome ? 'text-green-600' : 'text-red-600'}`} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>

              <div className="text-right">
                <p className={`font-semibold ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
                  {isIncome ? '+' : ''} R$ {Math.abs(transaction.amount).toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
