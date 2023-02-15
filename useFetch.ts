import axios from "axios";
import { Episode } from "../interfaces/interfaces";
import { useEffect, useState } from "react";

interface stateProps {
  data: Episode | null ;
  isLoading: boolean;
  hasError: unknown | null;
}

export const useFetch = (url: string) => {
  const [state, setState] = useState<stateProps>({
    data: null,
    isLoading: true,
    hasError: false,
  });

  const getData = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    try {
      const { data } = await axios<Episode>(url);

      setState({
        data,
        isLoading: false,
        hasError: false,
      });
    } catch (error) {
      console.log(error);
      setState({
        data: null,
        isLoading: true,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    getData();

    return () => {
      setState({ data: null, isLoading: true, hasError: false });
    };
  }, [url]);
  return {
    ...state,
  };
};
