
# Revoke Token Request

## Structure

`RevokeTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string \| undefined` | Optional | The Square issued ID for your application, available from the<br>[developer dashboard](https://developer.squareup.com/apps).<br>**Constraints**: *Maximum Length*: `191` |
| `accessToken` | `string \| undefined` | Optional | The access token of the merchant whose token you want to revoke.<br>Do not provide a value for merchant_id if you provide this parameter.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `1024` |
| `merchantId` | `string \| undefined` | Optional | The ID of the merchant whose token you want to revoke.<br>Do not provide a value for access_token if you provide this parameter. |
| `revokeOnlyAccessToken` | `boolean \| undefined` | Optional | If `true`, terminate the given single access token, but do not<br>terminate the entire authorization.<br>Default: `false` |

## Example (as JSON)

```json
{
  "access_token": "ACCESS_TOKEN",
  "client_id": "CLIENT_ID"
}
```

