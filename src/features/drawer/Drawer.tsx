import Icon from "@/components/icons/Icon";

const Drawer = () => {
  return (
    <div id="drawer">
      <div style={{ height: "8rem" }}>Logo</div>
      <a href="/" className="drawer-link active">
        <Icon name="dashboard" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>DASHBOARD</span>
      </a>
      <a href="/my-recipes" className="drawer-link">
        <Icon name="layers" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>MY RECIPES</span>
      </a>
      <a href="/create-recipe" className="drawer-link">
        <Icon name="layers-plus" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>CREATE RECIPE</span>
      </a>
      <button className="drawer-btn">
        <Icon name="signout" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>SIGN OUT</span>
      </button>
    </div>
  );
};

export default Drawer;
