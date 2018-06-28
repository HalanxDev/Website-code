'use strict';

/**
 * @ngdoc service
 * @name halanxApp.dashboard
 * @description
 * # dashboard
 * Factory in the halanxApp.
 */
angular.module('halanxApp')
  .factory('dashboard', function ($q,$http) {
    
    return {
      DashCall(key){
        var pr = $q.defer();
				var url = "https://api.halanx.com/stores/cart-items/";
            // console.log(obj);
				$http.get(url, {
            headers: {
                'Authorization': 'Token ' +key 
            }
          }).then(function(data){
					pr.resolve(data);
                    console.log("Data Posted",data);
				}
					,function(err){
					pr.reject(err);	
					console.log(" Error");
					});
            return pr.promise;
      },
      DashCallRealTime(key){
        var pr = $q.defer();
				var url = "https://api.halanx.com/stores/cart-items/";
            // console.log(obj);
				$http.get(url, {
            headers: {
                'Authorization': 'Token ' +key 
            }
          }).then(function(data){
					pr.resolve(data);
                    // console.log("Data Posted",data);
				}
					,function(err){
					pr.reject(err);	
					console.log(" Error");
					});
            return pr.promise;
      },
      PaymentCall(key){
        var pr = $q.defer();
				var url = "https://api.halanx.com/stores/payments/";
            // console.log(obj);
				$http.get(url, {
            headers: {
                'Authorization': 'Token ' +key 
            }
          }).then(function(data){
					pr.resolve(data);
                    console.log("Data Posted",data);
				}
					,function(err){
					pr.reject(err);	
					console.log(" Error");
					});
            return pr.promise;
      },
      loadStore(token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/";
        $http.get(url, {
          headers: {
              'Authorization': 'Token ' + '0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then((data)=>{
          pr.resolve(data.data);
          console.log("inside loadStore");
        },(err)=>{
          pr.reject(err);
        });

        return pr.promise;
      },
      getProduct(id,page_no){
        var pr = $q.defer();
        var url = "https://api.halanx.com/stores/"+id+"/products/?category=&page="+page_no;
        $http.get(url).then((data)=>{
          pr.resolve(data.data);
          console.log(data.data);
        },(err)=>{
          pr.reject(err);
        });

        return pr.promise;
      },
      editProduct(product,id,token){
        var pr = $q.defer();
        var url = "https://api.halanx.com/products/"+id+"/";
        $http.patch(url,product,{
          headers:{
            'Authorization':'Token '+token
          }
        }).then((data)=>{
          pr.resolve(data.data);
          console.log(data);
        },(err)=>{
          pr.reject(err);
        });

        return pr.promise;
      }, //basic structure ready krde sbka aage ka m api ka btadnga   ha iska to hogya bs data na aye vo rkdeta hu
      getVoucher(token){//chl gya data nhi a rha h pche s khali h as chechlga le if data.data.message = not found aye screen pr msg show krdio no transacion found   thek h
        var pr = $q.defer();
        var url = 'http://35.154.255.124:8000/vouchers/items/store/';
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise
      },
      getVoucherStats(token){
        var pr = $q.defer();
        var url = 'http://35.154.255.124:8000/vouchers/store/stats/';
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise
      },
      getVoucherOffers(token){
        var pr = $q.defer();
        var url = 'http://35.154.255.124:8000/vouchers/store/';
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise
      },
      getVoucherRedeemed(value,token){
        var pr=$q.defer();
        var url ="http://35.154.255.124:8000/vouchers/items/"+"30569471"+"/verify/";
        $http.post(url,value,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise
      },
      getOutletDetails(store,token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/places/place/"+store+"/";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      editOutletDetails(value,store,token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/places/place/"+store+"/";
        // console.log("Value"+value);
        $http.patch(url,value,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      editTime(value,store,token){
        console.log(value);
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/places/place/"+store+"/openinghours/";
        $http.patch(url,value,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getPlaceMenu(store,token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/places/place/"+store+"/";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getTimings(store,token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/places/place/"+store+"/openinghours/";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getPics(store,token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/places/place/"+store+"/menu/";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      addImage(store,token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/places/place/"+store+"/menu/";
        $http.post(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getMembers(token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/team/members/";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getStats(token,store){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/places/place/"+store+"/checkins/";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getStoreStats(token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/places/store/stats/";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getROI(token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/wallet/statement/?from_date=2018-05-01&to_date=2018-07-07";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getWalletAmt(token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/wallet/";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getNot(token){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/notifications/";
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getNoturl(url,token){
        var pr = $q.defer();
        // var url = url;
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getSalesBar(token,from,to){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/dashboard/plots/?sales=true&from_date="+from+"&to_date="+to;
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getVisitsBar(token,from,to){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/dashboard/plots/?visits=true&checkins=false&receipts=false&cart_items=false&from_date="+from+"&to_date="+to;
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getOrdersBar(toke,from,to){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/dashboard/plots/?visits=false&checkins=false&receipts=false&cart_items=true&from_date="+from+"&to_date="+to;
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      AddMember(token,member){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/team/members/";
        $http.post(url,member,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      EditTeam(token,id,data){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/team/members/"+id+"/";
        $http.patch(url,data,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      },
      getWalletSumm(token,month,date){
        var pr = $q.defer();
        var url = "http://35.154.255.124:8000/stores/wallet/statement/?from_date=2018-"+month+"-01&to_date=2018-"+month+"-"+date;
        $http.get(url,{
          headers:{
            'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
          }
        }).then(success,fail);
        function success(data){
          pr.resolve(data);
        }
        function fail(err){
          pr.reject(err);
        }
        return pr.promise;
      }
      // ,
      // gettodBar(token,from,to){
      //   var pr = $q.defer();
      //   var url = "http://35.154.255.124:8000/stores/team/members/"+store+"/";
      //   $http.get(url,{
      //     headers:{
      //       'Authorization':'Token '+'0d82010691295e6a779560dd06e9213eebaaed15'
      //     }
      //   }).then(success,fail);
      //   function success(data){
      //     pr.resolve(data);
      //   }
      //   function fail(err){
      //     pr.reject(err);
      //   }
      //   return pr.promise;
      // }
      
      
    };
  });