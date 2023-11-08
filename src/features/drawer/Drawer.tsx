import Icon from "../../components/Icon";

const Drawer = () => {
  return (
    <div className="drawer-wrapper">
      <div style={{ height: "8rem" }}>Logo</div>
      <a href="/" className="drawer-link active">
        <Icon name="plus" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>DASHBOARD</span>
      </a>
      <a href="/my-recipes" className="drawer-link">
        <Icon name="plus" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>MY RECIPES</span>
      </a>
      <a href="/create-recipe" className="drawer-link">
        <Icon name="plus" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>CREATE RECIPE</span>
      </a>
      <button className="drawer-link">
        <Icon name="plus" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>SIGN OUT</span>
      </button>
    </div>
  );
};

export default Drawer;
