import { test, expect } from "@playwright/test";

var userid;
test("Get users", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=1");

  console.log(await response.json());

  expect(response.status()).toBe(200);
});

test("Create user", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Baganna",
      job: "SDET intern",
    },
    headers: {
      Accept: "application/json",
    },
  });
  console.log(await response.json());

  expect(response.status()).toBe(201);
  var res = await response.json();
  userid = res.id;
});

test("Update user", async ({ request }) => {
    const response = await request.put(`https://reqres.in/api/users/${userid}`,
    {
        "data" :{
            "name":"Baganna",
            "job":"SDET"
        },
        "headers": {
            "Accept" : "application/json"
        }
    })
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test("Delete user", async ({ request }) => {
    const response = await request.delete(`https://reqres.in/api/users/${userid}`);
    expect(response.status()).toBe(204);
});
