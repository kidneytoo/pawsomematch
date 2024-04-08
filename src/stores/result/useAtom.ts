import { useAtom } from 'jotai';
import { resultAtom } from './atom';

export const useResultAtom = () => {
  const [result, setResult] = useAtom(resultAtom);

  const setPools = (pools: string[]) => {
    setResult({
      ...result,
      pools: pools.map((dog) => ({ key: dog, score: 0 })),
    });
  };

  const filterPools = (pools: string[]) => {
    const filteredResult = result.pools.filter((pool) => pools.includes(pool.key));
    setResult({
      ...result,
      pools: filteredResult,
    });
  }

  const updateAnswer = (answer: string) => {
    setResult({
      ...result,
      answer: [...result.answer, answer],
    });
  }

  const addScore = (pools: string[]) => {
    const updatedPools = result.pools.map((pool) => {
      if (pools.includes(pool.key)) {
        return { key: pool.key, score: pool.score + 1 };
      }
      return pool;
    });
    setResult({
      ...result,
      pools: updatedPools,
    });
  }

  const removeScore = (pools: string[]) => {
    const updatedPools = result.pools.map((pool) => {
      if (pools.includes(pool.key)) {
        return { key: pool.key, score: pool.score - 1 };
      }
      return pool;
    });
    setResult({
      ...result,
      pools: updatedPools,
    });
  }

  return { result, setPools, filterPools, updateAnswer, addScore, removeScore }
};
