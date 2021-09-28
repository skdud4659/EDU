import { ReactNode } from "react";

interface IDefaultProps {
  // ?: > 있어도 되고 없어도 되고
  page?: number;
  size?: number;
}

// interface 확장형 > IDefaultProps의 요소 포함 children 추가
interface IMenuProps extends IDefaultProps {
  children: ReactNode;
}

interface IMenuItemProps {
  item: TMenu;
}

interface ITotalPrice {
  total: TTotal;
}

type MenuItem = [{
  nickName: string;
}, {
  age: number;
}]

type TMenu = {
  name?: string;
  value: string;
  price: number;
  disabled: boolean;
  names: MenuItem;
};

// Pick<TMenu, "value"> : TMenu에서 value만 추출하여 사용
type TChangeMenu = Pick<TMenu, "value">;

type TCore = {
  page?: number;
  size?: number;
};

// interface 확장형처럼 type에서 &로 엮어서 사용할 수 있음
type TInput = TCore & {
  name?: string;
  value: string;
};

type TTotal = Pick<TMenu, "value"> & {
  totalPrice: number;
};

const menu: TMenu[] = [
  {
    name: "A",
    value: "a",
    price: 10000,
    disabled: true,
    names: [
      {
        nickName: "Ariel"
      },
      {
        age: 30
      }
    ]
  },
  {
    name: "B",
    value: "b",
    price: 20000,
    disabled: false,
    names: [
      {
        nickName: "Mike"
      },
      {
        age: 50
      }
    ]
  },
  {
    name: "C",
    value: "c",
    price: 30000,
    disabled: true,
    names: [
      {
        nickName: "Lola"
      },
      {
        age: 10
      }
    ]
  }
];

const defaultProps = {
  page: 1,
  size: 20
};

const Menu = ({ page, size = 30, children }: IMenuProps) => {
  console.log(page, size);
  return <ul className="item">{children}</ul>;
};

const MenuItem = (props: IMenuItemProps) => {
  const {
    item: { name, value, price, disabled: isVisible }
  } = props;
  return isVisible ? (
    <li>
      <span>{name}</span>
      <br />
      <span>{value}</span>
      <br />
      <span>{price}</span>
    </li>
  ) : null;
};

const TotalPrice = ({ total }: ITotalPrice) => {
  console.log(total);
  const { value, totalPrice } = total;
  return (
    <>
      <span className="value">{value}</span>
      <br />
      <span className="total-price">{totalPrice}</span>
    </>
  );
};

export default function App() {
  // Array.sort(); // 정렬. 알파벳 순서대로, 숫자 순서대로...
  // Array.forEach(); // ***
  // Array.map(); // ***
  // Array.filter(); // *
  // Array.join();
  // Array.reduce();
  // Array.some();
  // Array.find();
  // Array.findIndex();
  // Array.flat();
  // Array.flatMap();

  // length 5인 array를 1로 채운다.
  let counts = [...Array(5).fill(1)];
  counts = [...Array(10).keys()];
  console.log(counts);

  counts.forEach((count) => {
    console.log(count);
  });
  /* ---- Array.filter() ---- */
  // const filteredMenu: TMenu[] = menu.filter((item: TMenu) => {
  //   return item.disabled;
  // });

  const filteredMenu: TMenu[] = menu.filter((item: TMenu) => item.disabled);
  console.log(filteredMenu);
  /* ---- Array.map() ---- */
  // const changeMenu: TChangeMenu[] = menu.map((item: TMenu) => {
  //   return {
  //     value: item.value
  //   };
  // });
  const changeMenu: TChangeMenu[] = menu.map((item: TMenu) => ({
    value: item.value
  }));
  console.log(changeMenu);
  /* ---- 배열 구조 분해 할당 Destructuring assignment ---- */
  const newMenu: TChangeMenu[] = { ...menu, ...filteredMenu, ...changeMenu };
  console.log(newMenu);

  /* ---- Array.reduce() ---- */
  const value = menu.reduce((acc: string, item: TMenu) => {
    const { value: itemValue } = item;
    let result = acc;
    if (result !== "") {
      result += " ";
    }
    result += itemValue;
    return result;
  }, "");
  console.log(value);

  const _name = menu.map((item: TMenu) => {
    const _item = item.names;
    return `${_item[0].nickName}은 ${_item[1].age}살!`;
  });
  console.log(_name);

  const totalPrice = menu.reduce((acc: number, item: TMenu) => {
    const { price } = item;
    return acc + price;
  }, 0);
  console.log(totalPrice);


  const timesPrice = menu.reduce((acc: number, item: TMenu) => {
    const { price } = item;
    let result = acc
    if(result !== 0) {
      result = (acc*price)
    } else {
      result += price
    }
    return result;
  }, 0);
  console.log(timesPrice);

  const deviPrice = menu.reduce((acc: number, item: TMenu) => {
    const { price } = item;
    let result = acc
    if(result !== 0) {
      result = Math.floor(acc/price)
    } else {
      result += price
    }
    return result;
  }, 0);
  console.log(deviPrice);


  const total = {
    value,
    totalPrice
  };
  return (
    <div className="App">
      <Menu children={<div className="menu-item">Menu</div>} />
      <Menu>
        {menu.map((item: TMenu, idx: number) => {
          return <MenuItem key={`menu-item-${idx}`} item={item} />;
        })}
      </Menu>
      <TotalPrice total={total} />
    </div>
  );
}

Menu.defaultProps = defaultProps;
