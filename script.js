 function openSidebar() {
    document.getElementById("sidebar").classList.remove("-translate-x-full");
    document.getElementById("overlay").classList.remove("hidden");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.add("-translate-x-full");
    document.getElementById("overlay").classList.add("hidden");
  }
  var options = {
    series: [
      {
        name: "Total earning",
        data: [330,300,80,150,320,210,90,220,250,170,210,160,210,70,140,210,240,320,150,230,320,290,160,220,290,300,190,320,30,290,220]
      },
      {
        name: "Commission given",
        data: [60,50,20,30,55,40,20,45,50,30,35,30,40,20,30,35,45,60,30,50,60,55,30,45,60,55,35,55,10,50,40]
      }
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        columnWidth: "35%",
        borderRadius: 6
      }
    },
    colors: ["#599CFF", "#215DB5"],
    dataLabels: { enabled: false },
    xaxis: {
      categories: Array.from({ length: 31 }, (_, i) => i + 1)
    },
    yaxis: {
      labels: {
        formatter: val => val + "K"
      }
    },
    grid: {
      strokeDashArray: 5
    },
    legend: {
      position: "top",
      horizontalAlign: "right"
    }
  };

  new ApexCharts(document.querySelector("#earningChart"), options).render();