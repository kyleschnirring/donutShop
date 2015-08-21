        var counter = 0;

        var DonutMaster = function(){
          this.donutShopLocations = [];
          this.donutShopNames = ['Downtown', 'CapitalHill', 'SouthLakeUnion', 'Wedgewood', 'Ballard'];

          this.addShop = function(newLocation, minCustPerHour, maxCustPerHour, averageDonutsPerCust){
            var newShop = newLocation;
            this.donutShopNames.push(newShop);

            var newlyCreatedShop = new DonutShop(minCustPerHour, maxCustPerHour, averageDonutsPerCust);
            this.donutShopLocations.push(newlyCreatedShop);
          }

          this.generateList = function(){
            for (var i = 0; i < this.donutShopLocations.length; i++){

              console.log(this.donutShopNames[i]);
              this.donutShopLocations[i].getDonutsPerHour();
              this.donutShopLocations[i].getDonutsPerDay();
            }
          }

          this.makeBigList = function(){
            for (var i = 0; i < this.donutShopLocations.length; i++){
              var table = document.getElementById('myTable');
              var row = table.insertRow(1);
              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);
              var cell3 = row.insertCell(2);
              var cell4 = row.insertCell(3);
              var cell5 = row.insertCell(4);
              var cell6 = row.insertCell(5);

              cell1.innerHTML = this.donutShopNames[i];
              cell2.innerHTML = this.donutShopLocations[i].minCustPerHour;
              cell3.innerHTML = this.donutShopLocations[i].maxCustPerHour;
              cell4.innerHTML = this.donutShopLocations[i].averageDonutsPerCust;
              cell5.innerHTML = this.donutShopLocations[i].getDonutsPerHour();
              cell6.innerHTML = this.donutShopLocations[i].getDonutsPerDay();
            }
            counter++;
          }
        };

        var DonutShop = function(minCustPerHour, maxCustPerHour, averageDonutsPerCust){
          this.minCustPerHour = minCustPerHour;
          this.maxCustPerHour = maxCustPerHour;
          this.averageDonutsPerCust = averageDonutsPerCust;
          this.hoursOpen = 12;

          this.getDonutsPerHour = function(minCustPerHour,maxCustPerHour,averageDonutsPerCust){
            var averageCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;

            var averageDonutsAHour = averageCustomersPerHour * this.averageDonutsPerCust;

            console.log('Average amount of donuts in an hour: ' + averageDonutsAHour);

            return averageDonutsAHour;
          }

          this.getDonutsPerDay = function(minCustPerHour,maxCustPerHour,averageDonutsPerCust){
            var averageCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;

            var averageDonutsADay = (averageCustomersPerHour * this.averageDonutsPerCust) * this.hoursOpen;

            console.log('Average donuts needed a day: ' + averageDonutsADay);

            return averageDonutsADay;
          }
        };

          var downtown = new DonutShop(8, 43, 4.5);
          var capitalHill = new DonutShop(4, 37, 2);
          var southLakeUnion = new DonutShop(9, 23, 6.33);
          var wedgewood = new DonutShop(2, 28, 1.25);
          var ballard = new DonutShop(8, 58, 3.75);

          var topPot = new DonutMaster();

          topPot.donutShopLocations.push(downtown, capitalHill, southLakeUnion, wedgewood, ballard);

          topPot.addShop('Kirkland', 3, 3, 3);
          topPot.generateList();

          var CreateList = function(){
            //getting info from input elements
            this.elName = document.getElementById('newLocationName').value;
            this.minCustPerHour = document.getElementById('newMinCustPerHour').value;
            this.maxCustPerHour = document.getElementById('newMaxCustPerHour').value;
            this.averageDonutsPerCust = document.getElementById('newAveDonutsPerCust').value;
            //creating new donutshop and getting average amount of donuts
            this.newPlace = new DonutShop(this.minCustPerHour,this.maxCustPerHour,this.averageDonutsPerCust);
            this.donutsAnHour = this.newPlace.getDonutsPerHour();
            this.donutsADay = this.newPlace.getDonutsPerDay();
            //creating new table rows and filling them in
            this.createNewLine = function(){
              var table = document.getElementById('myTable');
              var row = table.insertRow(1);
              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);
              var cell3 = row.insertCell(2);
              var cell4 = row.insertCell(3);
              var cell5 = row.insertCell(4);
              var cell6 = row.insertCell(5);

              cell1.innerHTML = this.elName;
              cell2.innerHTML = this.minCustPerHour;
              cell3.innerHTML = this.maxCustPerHour;
              cell4.innerHTML = this.averageDonutsPerCust;
              cell5.innerHTML = this.donutsAnHour;
              cell6.innerHTML = this.donutsADay;
            }
            /* I have no idea what I was doing with this but it might be important
            this.addInfo = function(elName, donutsAnHour, donutsADay){
              document.getElementById('firstShopName').innerHTML = this.elName;
              document.getElementById('firstMinCustPerHour').innerHTML = document.getElementById('newMinCustPerHour').value;
              document.getElementById('firstMaxCustPerHour').innerHTML = document.getElementById('newMaxCustPerHour').value;
              document.getElementById('firstAvePerCustomer').innerHTML = document.getElementById('newAveDonutsPerCust').value;
              document.getElementById('averageAnHour').innerHTML = this.donutsAnHour;
              document.getElementById('averageADay').innerHTML = this.donutsADay;
            }
            */
            this.eraseFields = function(){
              document.getElementById('newLocationName').value = "";
              document.getElementById('newMinCustPerHour').value = "";
              document.getElementById('newMaxCustPerHour').value = "";
              document.getElementById('newAveDonutsPerCust').value = "";
            }
          };

          function calculateAndAdd(){
            if (document.getElementById('newLocationName').value == ""){
              alert('Please fill in the text boxes');
            }else{
              var myshop = new CreateList();
              myshop.createNewLine();
              myshop.eraseFields();
            }
          }

          function generateListInHtml(){
            if (counter !== 1){
              topPot.makeBigList();
            }else{
              alert("You've already generated a list no need to do it again.");
            }
          }
