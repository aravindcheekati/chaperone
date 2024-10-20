const FilterData = [
  {
    id: 1,
    name: "Types of Plants"
  },
  {
    id: 2,
    name: "Price"
  },
  {
    id: 3,
    name: "Nursery"
  },
  {
    id: 4,
    name: "Ideal Plants Location"
  },
  {
    id: 5,
    name: "Indoors / Outdoors"
  },
  {
    id: 6,
    name: "Maintainance"
  },
  {
    id: 7,
    name: "Plant Size"
  },
  {
    id: 8,
    name: "Water Schedule"
  },
  {
    id: 9,
    name: "Color"
  },
  {
    id: 10,
    name: "Seasonal"
  },
  {
    id: 11,
    name: "Lignt Efficient"
  }
];

const FilterSidebar = () => {
  return (
    <aside className="filter-aside">
      <div>
        <div className="filter-aside-header">
          <p>Filter</p>
          <button>CLEAR ALL</button>
        </div>
        {FilterData.map((item, index) => (
          <div className="filter-aside-header" key={index}>
            <p>{item.name}</p>
            <button>+</button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
