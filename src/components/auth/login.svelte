<script>
  import { authenticate, handleSignMessageRequest } from "micro-stacks/connect";
  import { v4 as uuidv4 } from "uuid";
  import { StacksMainnet } from "micro-stacks/network";
  import { session } from "$app/stores";

  async function login() {
    await authenticate({
      appDetails: {
        name: "Stacks Dashboard",
        icon: "https://i.imgur.com/zE88Ouvh.jpg",
      },
      onFinish: (payload) => {
        let stxAddress = payload.addresses.mainnet;
        let privateKey = payload.appPrivateKey;
        openSignatureRequest(stxAddress, privateKey);
      },
    });
  }

  async function openSignatureRequest(stxAddress, privateKey) {
    const nonce = uuidv4();
    const message = `I am signing my one-time nonce for Stacks Dashboard: ${nonce}`;

    await handleSignMessageRequest({
      privateKey,
      stxAddress,
      message: message,
      appDetails: {
        name: "some test app",
        icon: "https://i.imgur.com/zE88Ouvh.jpg",
      },
      async onFinish({ signature }) {
        const res = await fetch("/auth/login", {
          method: "POST",
          headers: { accept: "application/json" },
          body: JSON.stringify({
            stxAddress,
            message,
            signature,
          }),
        });
        const user = await res.json();

        if (res.status == "200") {
          $session = user;
        } else {
          $session = user.error;
        }
      },
      onCancel() {
        console.log("canceled!");
      },
      network: new StacksMainnet(),
    });
  }



</script>

<button on:click={login}>Sign In</button>

<a href="/auth/connect/discord"><button >Discord Connect</button></a>
