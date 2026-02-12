import Header from './components/Header';
import StatCard from './components/StatCard';
import TransactionList from './components/TransactionList';
import SpendingChart from './components/SpendingChart';
import AdBanner from './components/AdBanner';
import { Wallet, TrendingUp, CreditCard, PiggyBank } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner size="large" className="mb-8" />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Financeiro</h1>
          <p className="text-gray-600">Visão geral das suas finanças</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Saldo Total"
            value="R$ 12.450,00"
            change="12.5% vs mês anterior"
            isPositive={true}
            icon={Wallet}
            iconColor="bg-green-600"
          />
          <StatCard
            title="Receitas"
            value="R$ 6.700,00"
            change="8.3% vs mês anterior"
            isPositive={true}
            icon={TrendingUp}
            iconColor="bg-blue-600"
          />
          <StatCard
            title="Despesas"
            value="R$ 3.520,00"
            change="5.2% vs mês anterior"
            isPositive={false}
            icon={CreditCard}
            iconColor="bg-red-600"
          />
          <StatCard
            title="Economia"
            value="R$ 3.180,00"
            change="15.7% vs mês anterior"
            isPositive={true}
            icon={PiggyBank}
            iconColor="bg-purple-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-6">
            <TransactionList />
            <AdBanner size="medium" />
          </div>

          <div className="space-y-6">
            <AdBanner size="sidebar" />
            <SpendingChart />
          </div>
        </div>

        <AdBanner size="large" className="mb-8" />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">FinançaPro</h3>
              <p className="text-sm text-gray-600">Gestão financeira inteligente para sua vida.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-green-600">Preços</a></li>
                <li><a href="#" className="hover:text-green-600">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600">Sobre</a></li>
                <li><a href="#" className="hover:text-green-600">Blog</a></li>
                <li><a href="#" className="hover:text-green-600">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600">Privacidade</a></li>
                <li><a href="#" className="hover:text-green-600">Termos</a></li>
                <li><a href="#" className="hover:text-green-600">Segurança</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2026 FinançaPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
