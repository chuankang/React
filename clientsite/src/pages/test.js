import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div>
            <SearchBar/>
            <ProductTable products={PRODUCTS}/>
        </div>
    );
  }
}

class SearchBar extends Component {
  render() {
      return (
      <div>
        <input type="text" placeholder="Search"/>
        <p>
            <input type="checkbox"/>{''}Only show products in stock
        </p>
       </div>
    )
  }
}

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
        //要清楚我们需要的结构rows = [<Category1/>,<Row1/>,<Row2/>,<Category2/>,<Row3/>,</Row4/>]
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}/>
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}/>
        );
        lastCategory = product.category;
    });
    return (
        <table>
            <thead>
            <tr>
                <th>产品</th>
                <th>价格</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
  }
}

class ProductCategoryRow extends Component {
  render() {
    var category = this.props.category;
    return (<tr>
        <th cols={2}>{category}
        </th>
    </tr>)
  }
}

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>;
    // 如果是stocked就直接输出，否则用span包裹并设置style的color为red
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
  }
}

const PRODUCTS = [
  {category: '运动商品', price: '$49.99', stocked: true, name: '足球'},
  {category: '运动商品', price: '$9.99', stocked: true, name: '棒球'},
  {category: '运动商品', price: '$29.99', stocked: false, name: '篮球'},
  {category: '电子产品', price: '$99.99', stocked: true, name: 'OPPO R10'},
  {category: '电子产品', price: '$399.99', stocked: false, name: 'iPhone 8'},
  {category: '电子产品', price: '$199.99', stocked: true, name: 'MI 8'}
];

export default Test;
