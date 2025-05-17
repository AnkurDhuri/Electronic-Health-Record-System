Summary : The "Secure Electronic Health Records" project utilizes Ethereum blockchain, Metamask, and Ganache to enable patients to securely upload medical data and also view his data, manage doctor access, and view data history. Doctors can manage patient lists, access records, generate consultancy reports, and revoke access given by patient. Diagnostic centers can create EHR reports, ensuring visibility for both patients and doctors through IPFS integration. This decentralized approach enhances data security, interoperability, and patient control over health information, ultimately improving healthcare delivery and patient outcomes.

Technology Used :

Blockchain Technology: Ethereum<br>
Blockchain Development Tools: Metamask, Ganache<br>
Decentralized File Storage: IPFS (InterPlanetary File System)<br>
Smart Contract Development: Solidity<br>
Frontend Development: ReactJS<br>
Testing Frameworks: Truffle (for testing Solidity contracts)<br>
Version Control: Git<br>
Development Environment: Node.js<br>


Screenshots : 

<br><br>
Report has been reflected in record viewer so that both patient and doctor can see : 
<br>
<br>

<img width="1395" alt="Screenshot 2024-05-26 at 10 44 59 PM" src="https://github.com/Sonu208/Secure-Electronic-Health-Records/assets/99793746/b5549f81-7dd3-4e2c-8514-b44ed045fec2">
<br><br>
<img width="841" alt="Screenshot 2024-05-26 at 10 45 15 PM" src="https://github.com/Sonu208/Secure-Electronic-Health-Records/assets/99793746/c3b6c074-1fc2-4f92-a2ec-f4a3b6b0d4b2">



🆁🅴🆀🆄🅸🆁🅴🅼🅴🅽🆃🆂

1.Install nodeJs

* [Node JS](https://nodejs.org/en/download/)

2.Install Ganache

* [Ganache Truffle](https://www.trufflesuite.com/ganache)

3. Download IPFS (kubo)

* [IPFS Kubo](https://dist.ipfs.tech/#go-ipfs)

4.Add Metamask Extension in Browser

* [Metamask Chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en-US)

5. open cmd in project directory

```
npm install --force
```

5.open cmd/terminal as Administrator and type

```
npm install -g truffle
```

6.open Ganache
 
 *  New Workspace
 *  AddProject
 *  Select truffle-config.js in Project Directory
 *  Save Workspace

7.Compile and migrate Contracts
 ```
 truffle compile
 truffle migrate
 ```
8. Run Server

```
npm start
```
