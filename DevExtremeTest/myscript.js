console.log('test log');
window.onload = function() {
  var element = document.getElementById('buttonContainer');
  console.log(element);
  new DevExpress.ui.dxButton(element, { text: 'Hello World!' });

  const ds = new Array();
  for (let i = 1; i <= 100; i++) {
    ds.push({ ID: i, Name: 'Object ' + i });
  }
  //debugger;
  let gridElement = document.getElementById('mygrid');
  new DevExpress.ui.dxDataGrid(gridElement,
    {
      dataSource: ds,
    }
  );
};
