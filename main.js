$(function() {
   if($('.wrapper')[0]){
      var columnText = [],
          columnCount = 0,
          columnIndex = 0;

      // Loop through each table to detect number of columns
      $('.col-1 table').each(function(e) {
         columnText = [],
         columnCount = 0,
         columnIndex = 0;

         // Get the first table row, and push to an array!
         $(this).find("tr:first-child td").each(function(e){
            // PUSHHH!!!
            console.log('test: '+$(this).text());
            columnText.push($(this).text());
         });

         // How many is inside this array? lets check!
         columnCount = columnText.length;
         console.log(columnCount);

         // Loop through every rows TD except first!
         $(this).find("tr:not(:first-child) td").each(function(e){

            // the columnIndex represents the current TD
            // If the column index is greater than the column count?
            //    - Means that you have hit the end of the row
            // ColumnText Array = the column index, it should be the exact same array position
            // as the first row.
            //   CURRENT         5 <--
            if(columnIndex < columnCount){
               if(columnIndex != -1){
                  
                  $(this).prepend("<span>"+columnText[columnIndex]+":</span>");
                  console.log("columnIndex: "+columnIndex);
               }

               columnIndex++;

               if(columnIndex >= columnCount){
                  columnIndex = 0;
               }
            }
         });
      });
   }
});
