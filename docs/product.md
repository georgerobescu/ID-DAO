# Product

Below are product-focused high-level mock-ups and userflows for each scenario.

## Add I.D.

### GoodDollar User On-boarding

![](./img/out/GoodDollar_Wireframe_Add_Identity.png)

After the user goes through GoodDollar's login in / create account flow, they'll be asked to verify their identity. The user will be asked to provide a selfie, video, and social account verifications. These will all be verified by the DAO through a proposal accessible through alchemy.

[*Example Proposal Payload*](./architecture.md#Identity-Definition-Schema)  
[*Example Oracle Query*](./architecture.md#Oracle)  

### Alchemy Add I.D. Verification

![](./img/out/Alchemy-Add-Identity.png)

In Alchemy, the proposal payload that was prepared in the GoodDollar app is shown in the UI. Any verifications from GoodDollar's oracle are queried by Alchemy and shown. Two primary use cases for this oracle are government ID verification and external account OAuths. With this information, human voters can check these to determine whether the proposal is real. 

### Scenario Flowchart

Before the first time the user claims GD tokens, they are prompted to prove their identity.

![](./img/out/Scenario_Flow_Onboarding_Add_Identity.png)

## Edit I.D.

### GoodDollar User Profile Update

![](./img/out/GoodDollar_Wireframe_Update_Identity.png)

### Alchemy Edit I.D. Verification

![](./img/out/Alchemy-Edit-Identity.png)

On Alchemy, any changes or edits to a pre-existing identity will be reflected by the UI. Anything that has stayed the same will be omitted.

### Scenario Flowchart

Every 2 years, the user is prompted to re-prove their identity.

![](./img/out/Scenario_Flow_Updating_Edit_Identity.png)

## Delete I.D.

### GoodDollar User Off-boarding

![](./img/out/GoodDollar_Wireframe_Delete_Identity.png)

Deleting an identity from the GoodDollar app is fairly straightforward. Within the GoodDollar app's menu bar, the user would simply tap "Delete Account", and confirm the deletion. Finally, the GoodDollar server relays the signed transaction to remove the account to the network, and an email is sent to the user on success.

### Scenario Flowchart

At any time, the user can remove their own account from the registry.

![](./img/out/Scenario_Flow_Offboarding_Delete_Identity.png)

## GoodDollar Alchemy User On-boarding
After having their identity approved, the user will be invited via email to participate in the IdentityDAO as a voter.

![](./img/out/GoodDollar_User_Onboarding_Alchemy.png)


## Miscellaneous Scenarios

### User Forgot PIN

![](./img/out/Scenario_Flow_Exception_User_Forgot_PIN.png)

### Contact Support

![](./img/out/Scenario_Flow_Contact_Support.png)

### DAO Removes GoodDollar User's Identity

![](./img/out/Scenario_Flow_Exception_DAO_Removes_User.png)
