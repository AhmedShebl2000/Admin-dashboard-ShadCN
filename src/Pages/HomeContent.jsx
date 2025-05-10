import AppBarChart from "../components/AppBarChart";
import AppAreaChart from "../components/AppAreaChart";
import AppPieChart from "../components/AppPieChart";
import CardList from "../components/CardList";
import TodoList from "../components/TodoList";

function HomeContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
    </div>
  );
}

export default HomeContent;
