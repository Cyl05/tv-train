import { gql } from "@apollo/client";
import { useMutation, useSubscription } from "@apollo/client/react";
import React from "react";

const COUNTER_SUBSCRIPTION = gql`
  subscription CounterSub {
    counter_by_pk(id: 1) {
      value
    }
  }
`;

const INCREMENT_MUTATION = gql`
  mutation Increment($delta: Int!) {
    update_counter_by_pk(pk_columns: { id: 1 }, _inc: { value: $delta }) {
      value
    }
  }
`;

const Content: React.FC = () => {
	const { data, loading } = useSubscription(COUNTER_SUBSCRIPTION);
	const [updateCounter] = useMutation(INCREMENT_MUTATION);

	if (loading) return <p>Loading...</p>;

	const value = data?.counter_by_pk?.value ?? 0;

	const handleIncrement = (delta: number) => {
		updateCounter({ variables: { delta } });
	};

	return (
		<div style={{ textAlign: "center", marginTop: "5rem" }}>
			<h2>Live Counter</h2>
			<h1 style={{ fontSize: "4rem" }}>{value}</h1>
			<div style={{ marginTop: "1rem" }}>
				<button onClick={() => handleIncrement(-1)}>-</button>
				<button onClick={() => handleIncrement(1)} style={{ marginLeft: "1rem" }}>
					+
				</button>
			</div>
		</div>
	);
};

export default Content;
