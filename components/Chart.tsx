import {
  Chart,
  ChartOptions,
  FontSpec,
  LineOptions,
  Point,
  registerables,
  ScriptableAndScriptableOptions,
  ScriptableScaleContext,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

interface IChart {
  lineData: (number | Point | null)[];
  lineLabels: string[];
  valueTemplate: string;
}

const CustomChart = ({ lineData, lineLabels, valueTemplate }: IChart) => {
  const [imagePoint, setImagePoint] = useState<HTMLImageElement>();
  const [borderWidth, setBorderWidth] = useState(4);
  const [font, setFont] = useState<
    ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableScaleContext>
  >({
    size: 14,
    weight: '400',
    lineHeight: 1.2,
    family: 'Onest',
  });
  const [yAxesPadding, setYAxesPadding] = useState(31);

  useEffect(() => {
    const getOptions = () => {
      const getFont = () => {
        if (window.innerWidth < 576) {
          return {
            size: 8,
            weight: '400',
            lineHeight: 1.2,
            family: 'Onest',
          };
        } else if (window.innerWidth > 575 && window.innerWidth < 1440) {
          return {
            size: 10,
            weight: '400',
            lineHeight: 1.2,
            family: 'Onest',
          };
        } else {
          return {
            size: 14,
            weight: '400',
            lineHeight: 1.2,
            family: 'Onest',
          };
        }
      };

      const getSizeImage = () => {
        if (window.innerWidth < 576) {
          return {
            width: 5,
            height: 5,
          };
        } else if (window.innerWidth > 575 && window.innerWidth < 992) {
          return {
            width: 8,
            height: 8,
          };
        } else if (window.innerWidth > 991 && window.innerWidth < 1440) {
          return {
            width: 10,
            height: 10,
          };
        } else {
          return {
            width: 16,
            height: 16,
          };
        }
      };

      const getChartBorder = () => {
        if (window.innerWidth < 576) {
          return 1.2;
        } else if (window.innerWidth > 575 && window.innerWidth < 992) {
          return 2;
        } else if (window.innerWidth > 991 && window.innerWidth < 1440) {
          return 2.4;
        } else {
          return 4;
        }
      };

      const getYAxesPadding = () => {
        if (window.innerWidth < 576) {
          return 17;
        } else if (window.innerWidth > 575 && window.innerWidth < 768) {
          return 36;
        } else if (window.innerWidth > 767 && window.innerWidth < 1440) {
          return 13;
        } else {
          return 31;
        }
      };

      const newImagePoint = new Image();
      newImagePoint.src = 'assets/images/circlePointChart.png';
      const imageSize = getSizeImage();
      newImagePoint.width = imageSize.width;
      newImagePoint.height = imageSize.height;

      const newYAxesPadding = getYAxesPadding();
      const newBorderWidth = getChartBorder();
      const newFont = getFont();

      setImagePoint(newImagePoint);
      setFont(newFont);
      setBorderWidth(newBorderWidth);
      setYAxesPadding(newYAxesPadding);
    };

    getOptions();

    window.addEventListener('resize', getOptions);
    return () => window.removeEventListener('resize', getOptions);
  }, []);

  const chartData = {
    labels: lineLabels,
    datasets: [
      {
        label: undefined,
        data: lineData,
        borderWidth: borderWidth,
        borderColor: '#BE264C',
        backgroundColor: '#be264c33',
        fill: true,
        pointStyle: imagePoint,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          color: 'transparent',
          tickColor: 'transparent',
        },
        paddingLeft: 0,
        ticks: {
          color: '#FFFFFF',
          padding: yAxesPadding,
          count: 6,
          font: font,
          callback: function (value: any, index: number) {
            if (index == 0) return '';
            return valueTemplate.replace(
              '%%VALUE%%',
              String(value).split('.')[0]
            );
          },
        },
      },
      x: {
        grid: {
          color: '#363A3E',
          tickColor: 'transparent',
        },
        ticks: {
          color: '#FFFFFF',
          align: 'end',
          font: font,
        },
        position: 'left',
      },
    },
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  } as ChartOptions<'line'>;

  return (
    <Line
      style={{
        maxWidth: '1094px',
        maxHeight: '475px',
      }}
      width='100%'
      height='auto'
      data={chartData}
      options={chartOptions}
    />
  );
};

export default CustomChart;
