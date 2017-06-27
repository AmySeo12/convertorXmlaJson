angular.module("myApp", ["ng-file-model"])
    .controller("fileCtrl",["$scope", function($scope){
        $scope.submittedFile = {};
        $scope.obj = {};
        $scope.submit = function(obj){
            $scope.data =JSON.stringify(obj.testFile.data);
            $scope.loadDoc();
        }

        $scope.loadDoc= function(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    $scope.data=$scope.StringToXML(this.responseText);
                    console.log($scope.xmlToJson($scope.data));
                }
            };
            xhttp.open("GET", "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NDQo8Y2ZkaTpDb21wcm9iYW50ZSB4bWxuczpjZmRpPSJodHRwOi8vd3d3LnNhdC5nb2IubXgvY2ZkLzMiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhzaTpzY2hlbWFMb2NhdGlvbj0iaHR0cDovL3d3dy5zYXQuZ29iLm14L2NmZC8zIGh0dHA6Ly93d3cuc2F0LmdvYi5teC9zaXRpb19pbnRlcm5ldC9jZmQvMy9jZmR2MzIueHNkIiB2ZXJzaW9uPSIzLjIiIG5vQ2VydGlmaWNhZG89IjAwMDAxMDAwMDAwNDAwNTQ5NDM4IiBzZXJpZT0iSVpUIiBmZWNoYT0iMjAxNy0wNS0xOFQxMToxMzo0NSIgZm9saW89Ijg0MSIgZm9ybWFEZVBhZ289IlBhZ28gZW4gdW5hIHNvbGEgZXhoaWJpY2nDs24iIHN1YlRvdGFsPSIxMjE2MS4zNSIgdG90YWw9IjE0MTA3LjE3IiB0aXBvRGVDb21wcm9iYW50ZT0iaW5ncmVzbyIgY2VydGlmaWNhZG89Ik1JSUdCakNDQSs2Z0F3SUJBZ0lVTURBd01ERXdNREF3TURBME1EQTFORGswTXpnd0RRWUpLb1pJaHZjTkFRRUxCUUF3Z2dHeU1UZ3dOZ1lEVlFRRERDOUJMa011SUdSbGJDQlRaWEoyYVdOcGJ5QmtaU0JCWkcxcGJtbHpkSEpoWTJuRHMyNGdWSEpwWW5WMFlYSnBZVEV2TUMwR0ExVUVDZ3dtVTJWeWRtbGphVzhnWkdVZ1FXUnRhVzVwYzNSeVlXTnB3N051SUZSeWFXSjFkR0Z5YVdFeE9EQTJCZ05WQkFzTUwwRmtiV2x1YVhOMGNtRmphY096YmlCa1pTQlRaV2QxY21sa1lXUWdaR1VnYkdFZ1NXNW1iM0p0WVdOcHc3TnVNUjh3SFFZSktvWklodmNOQVFrQkZoQmhZMjlrYzBCellYUXVaMjlpTG0xNE1TWXdKQVlEVlFRSkRCMUJkaTRnU0dsa1lXeG5ieUEzTnl3Z1EyOXNMaUJIZFdWeWNtVnliekVPTUF3R0ExVUVFUXdGTURZek1EQXhDekFKQmdOVkJBWVRBazFZTVJrd0Z3WURWUVFJREJCRWFYTjBjbWwwYnlCR1pXUmxjbUZzTVJRd0VnWURWUVFIREF0RGRXRjFhSFREcVcxdll6RVZNQk1HQTFVRUxSTU1VMEZVT1Rjd056QXhUazR6TVYwd1d3WUpLb1pJaHZjTkFRa0NERTVTWlhOd2IyNXpZV0pzWlRvZ1FXUnRhVzVwYzNSeVlXTnB3N051SUVObGJuUnlZV3dnWkdVZ1UyVnlkbWxqYVc5eklGUnlhV0oxZEdGeWFXOXpJR0ZzSUVOdmJuUnlhV0oxZVdWdWRHVXdIaGNOTVRVeE1EQTNNVFkxT1RBNVdoY05NVGt4TURBM01UWTFPVEE1V2pDQnBqRWVNQndHQTFVRUF4TVZSMGxPUVNCTlFVUkJTU0JNVDFCRldpQlNWVWxhTVI0d0hBWURWUVFwRXhWSFNVNUJJRTFCUkVGSklFeFBVRVZhSUZKVlNWb3hIakFjQmdOVkJBb1RGVWRKVGtFZ1RVRkVRVWtnVEU5UVJWb2dVbFZKV2pFV01CUUdBMVVFTFJNTlRFOVNSemd5TURrd09WVktNekViTUJrR0ExVUVCUk1TVEU5U1J6Z3lNRGt3T1UxRVJsQmFUakF4TVE4d0RRWURWUVFMRXdaVlRrbEVRVVF3Z2dFaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQkR3QXdnZ0VLQW9JQkFRRFY4ek1XMUhZVWhmTk9ieVFJbDdyNHl6bVA1T2UycnJiclpxSVhCeEw3WUNoaVdsRTUzMlJKbGJISGZUV2NuUHFhWXpYRzNWUjVSaU9GUElQR0ZyM0xCY0c5Z1BlaDF2ZlE4UCt4Q2FQNGg2cHpJVm9hcVA2WTNiQnMvWCs0WTlQSjRGVjhIN2Rsdm5VNjNYMVNYQWNwUTBZMDQwUEdaOEdqdmtPaUVtNWdjMzZiS1M2YzRLVVl6NitEOWQwOC9DSFVqU2xNaGovRkpzZ09kNjJhMjg2QzhZUE9aa3B3WGFDTGppeWwwSERqSnhhYTFYV2xhV2hmd3c0aUxVWjRXMmhKWHh6RWNNMFdnMjRwRUUyc2Nvc2k5TDZtRkNIbUxybE5HWEdYSXRJdXc0dHFVTGl5L3M1ZTRjVDFRYTlNRjF4OEZHemdkRldtUUxDdlZERGlQRFFUQWdNQkFBR2pIVEFiTUF3R0ExVWRFd0VCL3dRQ01BQXdDd1lEVlIwUEJBUURBZ2JBTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElDQVFBTXB2RTI1TnFHNWwrWnBJUklSbnJFaG9HTmwvbDIzYXFHWkJXanhRLzVJNzBKWjBvKy9CYUY0K25LM29FSFJqbFEwMnMyT3NYVG85a2JZc1Q0OWhQREFOSGMwNXQ1aUJzd29DRDJxdHIvZCs5a1MwbXZBQmNDZ1lpb2cxQXJuOTVFMlRyMkJuYzU1NUt3UGRKeVVPRzFHNXdzUFNTd3NMbnlzWVJoNmhkVTdZTG1NTHc3OFJoTTN3WFJzZ25LdU1FU240M1NzZ3V3Sll0emF3dm96M0R3TGZYV2tzMXlqYXFxSFJYN0JwTW05WHVZU3lWYmNwNWxndVZJL05xZGdSb0k3MlI1TDVqem5XRGpmanN4UTQzSDg4cEdiMENkV1l0c000YU5lUFVCSkllVmRCYnIvWWpqVkhPbzMwQWEvZlJEczdpb2xBMXZjYW1XNklaeHNRcjU3TXk2Z1gwajhBV0pra1dCaHgyT2t1MEtCVTFhbmE0K1hmVTVvUGoyRzhrV0pXZ3dtRktNWnQybmJiMlJOV2xZcXpQdGZWNnJ6dEczSFhIUGtpdWNkTGt3RWxkUklTMjRZZXZ2NnhXZklJcWtpUldEN0I5UXNzL2twL3dCS21aRjhBRThHcGNKYUZkc3JibXdLYU9LcC9LSGVPMFNhMm8rZWtjUlU1UzFldlhPZXdSa1p3c2hJRWh2T1pZTlFJN3cydWhEVHFVd1pXcUJ4ZUV3NjUzaTdWVHBOTDgwbm1LUUxndVNpQzk2QnMyeCtiUnhKeUdMTTJqMGdtK0dMS3pJYWFuMEhBeUlwcGphQnZZNVZvQkgrVkFIM3c5aldQMmZJb2c1bGQ3UFZKbCtNR2lSbGtBWHRJVjVTc2poM3FETmRvSFFBUElSejNDTGJUZmNKZ1c5eFE9PSIgbWV0b2RvRGVQYWdvPSIwNCIgTHVnYXJFeHBlZGljaW9uPSJBdi4gRXJpdGEgSXp0YXBhbGFwYSAyMTY0LCBDb2wuIENvbnN0aXR1Y2lvbiBkZSAxOTE3LCBJenRhcGFsYXBhLCBDUCAwOTI2MCwgTWV4aWNvIERGLiAgIiBOdW1DdGFQYWdvPSJObyBpZGVudGlmaWNhZG8iIHNlbGxvPSJUdkM5RVA0MlBkRE1DMnZQeTFtK3JDRExMMjhiTVNFMVZQN1NRRy92V1JvMjFvaWRYbUl0UVdPODZpSlNpTjRDT0hxQ3k1bHNScWFzRXpCTGRpemdhU29UczdCNFBPVHBHemlhdFoySVVHZ2paU1dya2NpOGpJOHZNdVUzN1FOa2dEUmcwWno4TFNRMExlU0NWczZmVXZOaGdGUjROTTdtdHdwSmFwdGtEZ3lOL2QzWXZTaDlQaDF6ZjlNRDJVMjdDRGNoS3hjMDI1eUd4T2JraVdpbWZEM21mSkxSRTlVV0FxY1pZbmpDK0ljQnI4Z1BhNHRuaG5TdS90aVc0Rmp0RmpZVi9UVUp6VVpzMEI4RUNUUjV3YS95dDhrMWY5UitUemFiZWh6SzlOaGp4djZPMTJvOGFXZEpxMnFvUnF3eFl3dGpUYjZoMDREa0Z1WUp0UWxZRXc9PSI+PGNmZGk6RW1pc29yIHJmYz0iTE9SRzgyMDkwOVVKMyIgbm9tYnJlPSJHSU5BIE1BREFJIExPUEVaIFJVSVoiPjxjZmRpOkRvbWljaWxpb0Zpc2NhbCBjYWxsZT0iQXYuIEVybWl0YSBJenRhcGFsYXBhIiBub0V4dGVyaW9yPSIyMTY0IiBjb2xvbmlhPSJDb25zdGl0dWNpb24gZGUgMTkxNyIgbXVuaWNpcGlvPSJJenRhcGFsYXBhIiBlc3RhZG89IkNpdWRhZCBEZSBNw6l4aWNvIiBwYWlzPSJNw6l4aWNvIiBjb2RpZ29Qb3N0YWw9IjA5MjYwIi8+PGNmZGk6UmVnaW1lbkZpc2NhbCBSZWdpbWVuPSJSRUdJTUVOIERFIElOQ09SUE9SQUNJT04gRklTQ0FMIi8+PC9jZmRpOkVtaXNvcj48Y2ZkaTpSZWNlcHRvciByZmM9Ik1PQ0c3NTA3MTdRTDkiIG5vbWJyZT0iR0VSQVJETyBEQVJJTyBNT1JBTEVTIENBQkFMTEVSTyI+PGNmZGk6RG9taWNpbGlvIGNhbGxlPSJDQUxaQURBIERFTCBIVUVTTyIgbm9FeHRlcmlvcj0iNzEzIiBub0ludGVyaW9yPSIyMDEiIGNvbG9uaWE9IkdSQU5KQVMgQ09BUEEiIG11bmljaXBpbz0iVExBTFBBTiIgZXN0YWRvPSJDaXVkYWQgRGUgTcOpeGljbyIgcGFpcz0iTcOpeGljbyIgY29kaWdvUG9zdGFsPSIxNDMzMCIvPjwvY2ZkaTpSZWNlcHRvcj48Y2ZkaTpDb25jZXB0b3M+PGNmZGk6Q29uY2VwdG8gY2FudGlkYWQ9IjQiIHVuaWRhZD0iUFpBIiBub0lkZW50aWZpY2FjaW9uPSI1MDUxIiBkZXNjcmlwY2lvbj0iQkFSUklMIENPUk5FTElVUyBCQUxMIExPQ0sgVVNBRE8iIHZhbG9yVW5pdGFyaW89IjE5MTguNTM0NSIgaW1wb3J0ZT0iNzY3NC4xNCIvPjxjZmRpOkNvbmNlcHRvIGNhbnRpZGFkPSIxIiB1bmlkYWQ9IlBaQSIgbm9JZGVudGlmaWNhY2lvbj0iMTgwNSIgZGVzY3JpcGNpb249IkNPUkNIT0xBVEFTIERPUkFEQSA1MDAgcHoiIHZhbG9yVW5pdGFyaW89IjEzNy4wNjkwIiBpbXBvcnRlPSIxMzcuMDciLz48Y2ZkaTpDb25jZXB0byBjYW50aWRhZD0iNDIiIHVuaWRhZD0iUFpBIiBub0lkZW50aWZpY2FjaW9uPSIxODA5IiBkZXNjcmlwY2lvbj0iQk9URUxMQSBMT05HIE5FQ0sgQ0hBUk9MQSAgMjRweiIgdmFsb3JVbml0YXJpbz0iOTAuMTc4NSIgaW1wb3J0ZT0iMzc4Ny41MCIvPjxjZmRpOkNvbmNlcHRvIGNhbnRpZGFkPSIxIiB1bmlkYWQ9Ik5PIEFQTElDQSIgbm9JZGVudGlmaWNhY2lvbj0iQ09NVU4tNzY3Mi00NTk1OCIgZGVzY3JpcGNpb249IkVOVFJFR0EgQSBET01JQ0lMSU8iIHZhbG9yVW5pdGFyaW89IjI1OC42MjA3IiBpbXBvcnRlPSIyNTguNjIiLz48Y2ZkaTpDb25jZXB0byBjYW50aWRhZD0iMSIgdW5pZGFkPSJOTyBBUExJQ0EiIG5vSWRlbnRpZmljYWNpb249IkNPTVVOLTE5LTQ1OTYwIiBkZXNjcmlwY2lvbj0iT1RST1MgQ0FSR09TICIgdmFsb3JVbml0YXJpbz0iMzA0LjAyNTkiIGltcG9ydGU9IjMwNC4wMyIvPjwvY2ZkaTpDb25jZXB0b3M+PGNmZGk6SW1wdWVzdG9zIHRvdGFsSW1wdWVzdG9zVHJhc2xhZGFkb3M9IjE5NDUuODIiPjxjZmRpOlRyYXNsYWRvcz48Y2ZkaTpUcmFzbGFkbyBpbXB1ZXN0bz0iSVZBIiB0YXNhPSIxNi4wMCIgaW1wb3J0ZT0iMTk0NS44MiIvPjwvY2ZkaTpUcmFzbGFkb3M+PC9jZmRpOkltcHVlc3Rvcz48Y2ZkaTpDb21wbGVtZW50bz48dGZkOlRpbWJyZUZpc2NhbERpZ2l0YWwgeG1sbnM6dGZkPSJodHRwOi8vd3d3LnNhdC5nb2IubXgvVGltYnJlRmlzY2FsRGlnaXRhbCIgdmVyc2lvbj0iMS4wIiBVVUlEPSIwOEY3RUQ3Ny1EOTJGLTRENDktQjcxRS01RUY3MzZGMUQ2NTAiIEZlY2hhVGltYnJhZG89IjIwMTctMDUtMThUMTE6MTQ6NTMiIHNlbGxvQ0ZEPSJUdkM5RVA0MlBkRE1DMnZQeTFtK3JDRExMMjhiTVNFMVZQN1NRRy92V1JvMjFvaWRYbUl0UVdPODZpSlNpTjRDT0hxQ3k1bHNScWFzRXpCTGRpemdhU29UczdCNFBPVHBHemlhdFoySVVHZ2paU1dya2NpOGpJOHZNdVUzN1FOa2dEUmcwWno4TFNRMExlU0NWczZmVXZOaGdGUjROTTdtdHdwSmFwdGtEZ3lOL2QzWXZTaDlQaDF6ZjlNRDJVMjdDRGNoS3hjMDI1eUd4T2JraVdpbWZEM21mSkxSRTlVV0FxY1pZbmpDK0ljQnI4Z1BhNHRuaG5TdS90aVc0Rmp0RmpZVi9UVUp6VVpzMEI4RUNUUjV3YS95dDhrMWY5UitUemFiZWh6SzlOaGp4djZPMTJvOGFXZEpxMnFvUnF3eFl3dGpUYjZoMDREa0Z1WUp0UWxZRXc9PSIgbm9DZXJ0aWZpY2Fkb1NBVD0iMDAwMDEwMDAwMDAzMDAyNTAyOTIiIHNlbGxvU0FUPSJDYjJkUjJteFNUckl6ekszcWltaHpEQmo2YlBOWU1hMGE3WWRDSHlSNEVlVHFzZjd4WXljVkVyNU9GYXBQWTZjb1MyUTJoR0FrSWtXZytSN0dsVFZaWi9NTWQya1RHL1NINXF5ZUtqdVE4YWE3NHF0WXZZSjk4R1d4QkJWRG02SjQrWmMyVUFaM0xpZGZucG9QbGl5eGhuaEovelVQeVhCdWVZTStsM2FVSlE9IiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4c2k6c2NoZW1hTG9jYXRpb249Imh0dHA6Ly93d3cuc2F0LmdvYi5teC9UaW1icmVGaXNjYWxEaWdpdGFsIGh0dHA6Ly93d3cuc2F0LmdvYi5teC9UaW1icmVGaXNjYWxEaWdpdGFsL1RpbWJyZUZpc2NhbERpZ2l0YWwueHNkIi8+PC9jZmRpOkNvbXBsZW1lbnRvPjwvY2ZkaTpDb21wcm9iYW50ZT4NDQo=", true);
            xhttp.send();
        }
        $scope.StringToXML= function(oString) {
            //code for IE
            if (window.ActiveXObject) { 
                var oXML = new ActiveXObject("Microsoft.XMLDOM"); oXML.loadXML(oString);
                return oXML;
            }
            // code for Chrome, Safari, Firefox, Opera, etc. 
            else {
                return (new DOMParser()).parseFromString(oString, "text/xml");
            }
        }
        $scope.xmlToJson= function( xml ) {
            // Create the return object
            var obj = {};
            if ( xml.nodeType == 1 ) { // element
            // do attributes
                if ( xml.attributes.length > 0 ) {
                    obj["@attributes"] = {};
                    for ( var j = 0; j < xml.attributes.length; j++ ) {
                        var attribute = xml.attributes.item( j );
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    }
                }
            } else if ( xml.nodeType == 3 ) { // text
                obj = xml.nodeValue;
            }

            // do children
            if ( xml.hasChildNodes() ) {
                for( var i = 0; i < xml.childNodes.length; i++ ) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                    if ( typeof(obj[nodeName] ) == "undefined" ) {
                        obj[nodeName] = $scope.xmlToJson( item );
                    } else {
                        if ( typeof( obj[nodeName].push ) == "undefined" ) {
                            var old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push( old );
                        }
                        obj[nodeName].push( $scope.xmlToJson( item ) );
                    }
                }
            }
            return obj;
        }
    }])