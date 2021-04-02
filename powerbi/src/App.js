import logo from './logo.svg';
import './App.css';

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import styled from 'styled-components';


function App() {
  return (

    <Wrapper>
        <headerWrapper>
            <h3>Power Report Embedded in a React App</h3>
        </headerWrapper>
   
    <div className="App">
      <header className="App-header">
        
        <PowerBIEmbed             
          embedConfig = {
          {
              type: 'report', // Supported types: report, dashboard, tile, visual, and qna.
              id: '6f14e67d-a0e0-4ab2-b5fc-44b2f4085cf6',
              embedUrl: "https://app.powerbi.com/reportEmbed?reportId=6f14e67d-a0e0-4ab2-b5fc-44b2f4085cf6&groupId=46f473fc-dc97-42ea-8c93-ab44d4dd9f4d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtQi1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWV9fQ%3d%3d",
              accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTg4MzA0MGQtNTViNS00MDQ0LWIzNzYtYTRhNGJhNTk1ODMyLyIsImlhdCI6MTYxNzMyMjA4OCwibmJmIjoxNjE3MzIyMDg4LCJleHAiOjE2MTczMjU5ODgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF5c2s2NkxrRFlGaVVnNUVDNjd1VlEybTNGblRneUFRbis0STJmUEtOMUtOQjdHd1NpTzdrNTFHZkRCWFdleHU5IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiTXVrZWgiLCJnaXZlbl9uYW1lIjoiUGFuY3JhdGl1cyIsImlwYWRkciI6IjY2LjY5LjEyMy4xNSIsIm5hbWUiOiJQYW5jcmF0aXVzIE11a2VoIiwib2lkIjoiZTdmYjYzMjMtZDNhNS00NDEzLWE5MDktYjk3OTQ4ZjE5MWE2IiwicHVpZCI6IjEwMDMwMDAwQTYwQ0NEQUQiLCJyaCI6IjAuQVM0QURRU0Q2TFZWUkVDemRxU2t1bGxZTWc4QkhJZGhYckZQZzZ5WVlRcC1rUkF1QUFBLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6ImJRQW5rYTZGU2Y3Q3l6MWI3bDhGeDlRVVVHN3ZMNnk0Z3ZmelFJOFcyRFkiLCJ0aWQiOiJlODgzMDQwZC01NWI1LTQwNDQtYjM3Ni1hNGE0YmE1OTU4MzIiLCJ1bmlxdWVfbmFtZSI6InBtdWtlaEBCaXRsZWdlbmNlcy5jb20iLCJ1cG4iOiJwbXVrZWhAQml0bGVnZW5jZXMuY29tIiwidXRpIjoiRDI1NzRzejdoVWVfbjR1Yi1KVVRBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.WjS_DHThFbabkL8Rr739NkgGsZrQK1dC9QXdLHq5TcBXEiwy2WsKryqItP00jJIbvseXz3nFEY37ziOQcCeB6PMUU8AnGscLDm0E5m_sgUboOIhX81iHfDuL8oyftmOSCPYs0pIgKtEwUuK45LAGSHBDNZ4utAjvAUcdawo_-NMC2nPUdHPYbSdaMy66nWEFEvu505Ww2MqFERT58XsRsWt4YGHEaq-o8iaOq1yujELXVdtEpaUXbMg5VYi_EZMuGuymsRX34O1FI8C3w0KRcTEQGlFcshTt8Wi6Rf8Z13OQD93mW1j0OKSI7LRO1n5o0d8Z1e8q1llPab1b_oZ7jw',
              tokenType: models.TokenType.Aad, // Use models.TokenType.Aad if you're embedding for your organization.
              settings: {
                  panes: {
                      filters: {
                          expanded: true,
                          visible: true
                      }
                  },
              }
          }
        }

        eventHandlers = {
          new Map([
              ['loaded', function () {
                  console.log('Report loaded');
              }],
              ['rendered', function () {
                  console.log('Report rendered');
              }],
              ['error', function (event) {
                  console.log(event.detail);
              }]
          ])
        }

        cssClassName = {
          "container"
        }

        getEmbeddedComponent = {
          (embeddedReport) => {
              window.report = embeddedReport;
          }
        }
        />
        </header>
      </div>

      </Wrapper>
    );
  }
  
export default App;

const Wrapper = styled.div`
  text-align: center;
  padding-top:20px;

`