import { responseData } from "@/responseData";
export default function FullResponse() {
  return (
    <div>
      <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg font-mono overflow-auto">
        {JSON.stringify(responseData, null, 2)}
      </pre>
    </div>
  );
}
