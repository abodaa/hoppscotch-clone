import EmptyResponse from "./EmptyResponse";
import FullResponse from "./FullResponse";

export default function Response(props) {
  return (
    <div className="">
      {!props.fullResponse ? <EmptyResponse /> : <FullResponse />}
    </div>
  );
}
