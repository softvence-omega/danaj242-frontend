import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
//   need to fix later 
const CommonSelect = () => {
  return  <Select onValueChange={(value) => setCountryCode(value)}>
                <SelectTrigger className="w-fit cursor-pointer bg-[#89AAD5] text-white border-none rounded-xl px-4 py-3">
                  <SelectValue placeholder="AU" />
                </SelectTrigger>
                <SelectContent className=" bg-[#0B1739]  text-white border-none">
                  {CountryCodes.map((country) => (
                    <SelectItem
                      key={country.code}
                      value={country.value}
                      className="cursor-pointer  hover:bg-[linear-gradient(291deg,_#38B6FF_-45.64%,_#09489D_69.04%)] hover:text-white"
                    >
                      {country.label} ({country.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

export default CommonSelect;
