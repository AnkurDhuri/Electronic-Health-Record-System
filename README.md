Summary : The "Secure Electronic Health Records" project utilizes Ethereum blockchain, Metamask, and Ganache to enable patients to securely upload medical data and also view his data, manage doctor access, and view data history. Doctors can manage patient lists, access records, generate consultancy reports, and revoke access given by patient. Diagnostic centers can create EHR reports, ensuring visibility for both patients and doctors through IPFS integration. This decentralized approach enhances data security, interoperability, and patient control over health information, ultimately improving healthcare delivery and patient outcomes.

Website Link: https://electronic-health-record-system.vercel.app/

Technology Used :

Blockchain Technology: Ethereum<br>
Blockchain Development Tools: Metamask, Ganache<br>
Decentralized File Storage: IPFS (InterPlanetary File System)<br>
Smart Contract Development: Solidity<br>
Frontend Development: ReactJS<br>
Testing Frameworks: Truffle (for testing Solidity contracts)<br>
Version Control: Git<br>
Development Environment: Node.js<br>

Screenshots
![Image](https://github.com/user-attachments/assets/b3e99aa1-aadb-4ffd-92b6-136da7bdea5f)

![Image](https://github.com/user-attachments/assets/457f6b83-97f3-44df-b8e2-bbd12725ba58)

![Image](https://github.com/user-attachments/assets/3f285164-d4fe-497a-9e70-82fd3a7ff3db)

![Image](https://github.com/user-attachments/assets/16ff8f09-ecd8-4803-85bb-4ac91a03ee72)

![Image](https://github.com/user-attachments/assets/60068eac-f3e1-49b2-b61c-c12e9604cb33)

![Image](https://github.com/user-attachments/assets/a929cfe7-dd00-4a2e-9d0e-1a0e1d58ac0c)

![Image](https://github.com/user-attachments/assets/c5e5aad9-2e30-491f-93a9-ebca15a57b37)

![Image](https://github.com/user-attachments/assets/58cfae89-1ca1-42c7-9739-7c96cd6cc4c1)

![Image](https://github.com/user-attachments/assets/67634d83-957c-40b9-8fef-39edafd56c48)

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
