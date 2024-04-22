import { FaExternalLinkAlt } from "react-icons/fa"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);


const Usage = ({tokens}) => {
    const data = {
        labels: ['Tokens'],
        datasets: [
          {
            label: 'Token left',
            data: [tokens],
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true
      };

      const textcenter = {
        id: 'textcenter',
        beforeDatasetsDraw(chart, args ,pluginOptions) {
          const { ctx, data } = chart;
          ctx.save(); 
          const xCoor = chart.getDatasetMeta(0).data[0].x;
          const yCoor = chart.getDatasetMeta(0).data[0].y;

          ctx.font = ' 15px sans-serif';
          ctx.fillStyle = '#808080';
          ctx.fillText('Total:', xCoor, yCoor - 15);


          ctx.font = 'bolder 25px sans-serif';
          ctx.fillStyle = 'black';
          ctx.fillText(data.datasets[0].data[0], xCoor, yCoor + 25);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          let sliceThicknessPixel = [80]
          sliceThicknessPixel.forEach((thickness, index) =>{
            chart.getDatasetMeta(0).data[index].outerRadius = thickness
          })
        }
      }
  return (
      <div className='p-4 h-fit w-fit'>
        <h2 className="text-lg font-bold leading-7 text-gray-900 flex items-center gap-4">
            Usage
            <FaExternalLinkAlt 
                size={15}
            />
        </h2>
        <div className="bg-white m-2 rounded-lg ring-1 ring-inset ring-gray-300 pb-2">
          <div className="   flex flex-col justify-center items-center w-72 h-64">
              <Doughnut 
                  data={data}
                  options={options}
                  plugins={[textcenter]}
                  />
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-4 h-4 bg-[#36a2eb] rounded"></div>
            <p className="">Credits left: 
              <span className="font-bold">
                {(tokens /2000) * 100}%
              </span>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Usage