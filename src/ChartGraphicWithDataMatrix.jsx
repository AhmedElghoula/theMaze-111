import React from 'react';
import { Bar } from '@ant-design/charts';

const BarChartWithDataMatrix = () => {
  // Provided data matrix
  const dataMatrix = [
    { product: "Product A", date: "2022-01-01", price: 10 },
    { product: "Product A", date: "2022-02-01", price: 12 },
    { product: "Product A", date: "2022-03-01", price: 15 },
    { product: "Product B", date: "2022-01-01", price: 8 },
    { product: "Product B", date: "2022-02-01", price: 9 },
    { product: "Product B", date: "2022-03-01", price: 11 },
    { product: "Product C", date: "2022-01-01", price: 15 },
    { product: "Product C", date: "2022-02-01", price: 18 },
    { product: "Product C", date: "2022-03-01", price: 20 }
  ];

  // Convert data format and normalize date to display only month and year
  const formattedData = dataMatrix.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    product: item.product,
    price: item.price,
  }));

  // Define colors for each product
  const productColors = {
    'Product A': '#1890ff',
    'Product B': '#f5222d',
    'Product C': '#52c41a',
  };

  // Configuration options for the bar chart
  const config = {
    data: formattedData,
    xField: 'date',
    yField: 'price',
    seriesField: 'product',
    colorField: ({ product }) => productColors[product],
  
    tooltip: {
      shared: false,
      customContent: (title, items) => {
        return `<div style="padding: 8px;">
          <div>${title}</div>
          
          ${items
            .map(
              item =>
                `<div style="margin-top: 4px;">
                  <span style="color: ${productColors[item.product]};">${item.product}</span>: Price: ${item.data.price} (qté: ${item.data.price})
                </div>`
            )
            .join('')}
        </div>`;
      },
    },
  };

  return <Bar {...config } />;
};

export default BarChartWithDataMatrix;
