import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

interface StatusListChartProps {
  approvedCount: number;
  rejectedCount: number;
  pendingCount: number;
}

const StatusListChart: React.FC<StatusListChartProps> = ({ approvedCount, rejectedCount, pendingCount}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); 

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) {
      console.error("Failed to get canvas context"); 
      return;
    }

    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Approved', 'Rejected','Pending'],
        datasets: [{
          data: [approvedCount, rejectedCount,pendingCount],
          backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']
        }],
      },
      options: {
        responsive: true,
        legend: {
          display: false, 
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [approvedCount, rejectedCount]);

  return (
    <div className="d-flex flex-center me-5 pt-2">
      <div 
        id="kt_card_widget_4_chart" 
        style={{ minWidth: '70px', minHeight: '70px' }} 
        data-kt-size="70" 
        data-kt-line="11"
      >
        <span></span>
        {/* Use ref here */}
        <canvas ref={canvasRef} height="70" width="70"></canvas>
      </div>
    </div>
  );
};

export default StatusListChart;