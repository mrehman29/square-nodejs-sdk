
# List Workweek Configs Response

The response to a request for a set of `WorkweekConfig` objects. Contains
the requested `WorkweekConfig` objects. May contain a set of `Error` objects if
the request resulted in errors.

## Structure

`ListWorkweekConfigsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workweekConfigs` | [`WorkweekConfig[] \| undefined`](/doc/models/workweek-config.md) | Optional | A page of Employee Wage results. |
| `cursor` | `string \| undefined` | Optional | Value supplied in the subsequent request to fetch the next page of<br>Employee Wage results. |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "cursor": "2fofTniCgT0yIPAq26kmk0YyFQJZfbWkh73OOnlTHmTAx13NgED",
  "workweek_configs": [
    {
      "created_at": "2016-02-04T00:58:24Z",
      "id": "FY4VCAQN700GM",
      "start_of_day_local_time": "10:00",
      "start_of_week": "MON",
      "updated_at": "2019-02-28T01:04:35Z",
      "version": 11
    }
  ]
}
```

